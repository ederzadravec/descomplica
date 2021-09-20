import { ObjectType, InputType, Field } from "type-graphql";

import { getResponseType, PaginationResponse } from "./default";

@ObjectType()
export class Student {
  @Field()
  name: string;

  @Field()
  cpf: string;

  @Field()
  email: boolean;
}

export class Students extends PaginationResponse {
  @Field(() => [Student])
  data: Student[];
}

@InputType()
export class StudentCreate {
  @Field()
  name: string;

  @Field()
  cpf: string;

  @Field()
  email: boolean;
}

@InputType()
export class StudentUpdate {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  cpf?: string;

  @Field({ nullable: true })
  email?: boolean;
}

export const StudentMutationResponse = getResponseType(Student);
