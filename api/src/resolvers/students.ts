import { Resolver, Query, Mutation, Arg } from "type-graphql";

import StudentModel from "app/models/students";
import {
  Students,
  Student,
  StudentFilter,
  StudentCreate,
  StudentUpdate,
  StudentMutationResponse,
} from "app/schemas/students";
import { newDbDate } from "app/utils/date";
import { onlyNumbers } from "app/utils/numbers";
import { duplicatedFields } from "app/utils/responses";
import { PaginationInput } from "app/schemas/default";

@Resolver()
class StudentsResolver {
  model;

  constructor() {
    this.model = new StudentModel();
  }

  @Query((returns) => Students)
  async students(
    @Arg("paginate", { nullable: true }) paginate: PaginationInput,
    @Arg("filter", { nullable: true }) filter: StudentFilter
  ): Promise<Students> {
    try {
      const data = await this.model.findAll(paginate, filter);

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  @Query((returns) => Student)
  async student(@Arg("filter") filter: StudentFilter): Promise<Student> {
    try {
      const data = await this.model.findOne(filter);

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  @Mutation((returns) => StudentMutationResponse)
  async createStudent(
    @Arg("data") data: StudentCreate
  ): Promise<typeof StudentMutationResponse> {
    try {
      const newStudent = {
        ...data,
        cpf: onlyNumbers(data.cpf),
      };

      const hasFields = await this.model.hasAny({
        cpf: newStudent.cpf,
        email: data.email,
      });

      if (hasFields.length) {
        return duplicatedFields(hasFields);
      }

      const result = await this.model.create({
        ...newStudent,
        createdAt: newDbDate(),
        updatedAt: newDbDate(),
      });

      if (result) {
        return result;
      }

      return {
        error: true,
        message: "Not found",
      };
    } catch (e) {
      console.log(e);
    }
  }

  @Mutation((returns) => StudentMutationResponse)
  async updateStudent(
    @Arg("student") student: number,
    @Arg("data") data: StudentUpdate
  ): Promise<typeof StudentMutationResponse> {
    try {
      const newStudent = {
        ...data,
        cpf: onlyNumbers(data.cpf),
      };

      const hasFields = await this.model.hasAny(
        {
          cpf: newStudent.cpf,
          email: data.email,
        },
        { id: student }
      );

      if (hasFields.length) {
        return duplicatedFields(hasFields);
      }

      const result = await this.model.updateOne(student, {
        ...newStudent,
        updatedAt: newDbDate(),
      });

      if (result) {
        return result;
      }

      return {
        error: true,
        message: "Not found",
      };
    } catch (e) {
      console.log(e);
    }
  }
}

export default StudentsResolver;
