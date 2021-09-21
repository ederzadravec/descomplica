import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("students", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.string("cpf");
    table.string("email");
    table.bigInteger("createdAt");
    table.bigInteger("updatedAt");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("students");
}
