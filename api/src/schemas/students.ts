import { ObjectType, InputType, Field } from "type-graphql";

import { getResponseType, PaginationResponse } from "./default";

@ObjectType()
export class Student {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  cpf: string;

  @Field()
  email: string;

  @Field()
  createdAt: number;

  @Field()
  updatedAt: number;
}

@ObjectType()
export class Students extends PaginationResponse {
  @Field(() => [Student])
  data: Student[];
}

@InputType()
export class StudentFilter {
  @Field({ nullable: true })
  id?: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  cpf?: string;

  @Field({ nullable: true })
  email?: string;
}

@InputType()
export class StudentCreate {
  @Field()
  name: string;

  @Field()
  cpf: string;

  @Field()
  email: string;
}

@InputType()
export class StudentUpdate {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  cpf?: string;

  @Field({ nullable: true })
  email?: string;
}

export const StudentMutationResponse = getResponseType(Student);
