import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ObjectType, InputType, Field, createUnionType } from "type-graphql";

export class Context {
  app: FastifyInstance;
  req: FastifyRequest;
  reply: FastifyReply;
}

@InputType()
export class PaginationInput {
  @Field({ nullable: true })
  page!: number;

  @Field({ nullable: true })
  perPage!: number;
}

@ObjectType()
export class PaginationResponse {
  @Field()
  total!: number;

  @Field()
  pages!: number;

  @Field()
  page!: number;

  @Field()
  perPage!: number;
}

@ObjectType()
export class ResponseErrorField {
  @Field()
  field!: string;

  @Field()
  message!: string;
}

@ObjectType()
export class ResponseError {
  @Field()
  error!: boolean;

  @Field()
  message!: string;

  @Field()
  code!: string;

  @Field(() => [ResponseErrorField], { nullable: true })
  fields?: ResponseErrorField[];
}

export const getResponseType = (Type: any) => {
  return createUnionType({
    name: `${Type.name}Response`,
    types: () => [Type, ResponseError],
    resolveType: (value) => {
      return value.error ? ResponseError.name : Type.name;
    },
  });
};
