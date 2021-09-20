import { Resolver, Query, Mutation, Arg } from "type-graphql";

import {
  // Students,
  Student,
  StudentCreate,
  StudentUpdate,
  StudentMutationResponse,
} from "schemas/students";

@Resolver()
class StudentsResolver {
  // @Query((returns) => Students)
  // async students(): Promise<Students> {
  //   try {
  //     return {
  //       limit: 10,
  //       total: 5,
  //       page: 5,
  //       pages: 1,
  //       data: [],
  //     };
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  @Query((returns) => Student)
  async student(): Promise<Student> {
    try {
      return null;
    } catch (e) {
      console.log(e);
    }
  }

  @Mutation((returns) => StudentMutationResponse)
  async createStudent(
    @Arg("data") data: StudentCreate
  ): Promise<typeof StudentMutationResponse> {
    try {
      return null;
    } catch (e) {
      console.log(e);
    }
  }

  @Mutation((returns) => StudentMutationResponse)
  async updateStudent(
    @Arg("data") data: StudentUpdate
  ): Promise<typeof StudentMutationResponse> {
    try {
      return null;
    } catch (e) {
      console.log(e);
    }
  }
}

export default StudentsResolver;
