import { Knex } from "knex";

import db from "app/config/db";
import * as Types from "app/@types/model";
import { removeNull } from "app/utils/object";

class Model<TypeModel> {
  table: () => Knex | any;

  constructor(table: string) {
    this.table = () => db.table(table);
  }

  hasAny = async (
    where: Types.where[],
    notWhere?: Types.where
  ): Promise<string[]> => {
    const fieldsKey = Object.keys(where).filter((item) => where[item]);

    const query = this.table();

    query.where((x) => {
      x.where(removeNull(where));
    });

    if (notWhere) {
      query.whereNot((x) => {
        x.where(removeNull(notWhere));
      });
    }

    const result = await query.select();

    if (!result) return [];

    return result.reduce((acc, item) => {
      const hasKeys = fieldsKey.filter((key) => item[key] === where[key]);

      return [...acc, ...hasKeys];
    }, []);
  };

  findOne = async (where: Types.where): Promise<TypeModel> => {
    const query = this.table();

    if (where) {
      query.where(removeNull(where));
    }

    const result = await query.select().first();

    return result;
  };

  findAll = async (
    pagination: Types.pagination,
    where: Types.where
  ): Promise<Types.findAll<TypeModel>> => {
    const query = this.table();
    const queryCount = this.table();

    const perPage = pagination?.perPage || 10;
    const page = pagination?.page || 1;

    if (where) {
      query.where(removeNull(where));
      queryCount.where(removeNull(where));
    }

    const total = await queryCount
      .count({ count: "*" })
      .then((item) => item[0].count);
    const data = await query.offset((page - 1) * perPage).limit(perPage);

    const pages = Math.trunc(total / perPage);

    return {
      perPage,
      page,
      total,
      data,
      pages,
    };
  };

  create = async (data: TypeModel): Promise<TypeModel> => {
    try {
      const created = await this.table().insert(data);

      const result = await this.table()
        .where({ id: created[0] })
        .select()
        .first();

      return result;
    } catch (e) {
      console.log(e);
    }
  };

  updateOne = async (id: number, data: TypeModel): Promise<TypeModel> => {
    const query = this.table();

    try {
      await query.where({ id }).update(data);

      const result = await this.table().where({ id }).first();

      return result;
    } catch (e) {
      console.log(e);
    }
  };

  remove = async (where: Types.where): Promise<boolean> => {
    const query = this.table();

    if (where) {
      query.where(where);
    }

    try {
      const result = await query.del();

      console.log(result);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };
}

export default Model;
