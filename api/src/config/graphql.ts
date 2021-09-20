import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import mercurius from "mercurius";
import { buildSchema } from "type-graphql";

import Students from "resolvers/students";

const setup = async (app: FastifyInstance): Promise<void> => {
  const schema = await buildSchema({
    resolvers: [Students],
    validate: false,
  });

  const buildContext = async (req: FastifyRequest, reply: FastifyReply) => {
    return {
      app,
      req,
      reply,
    };
  };

  app.register(mercurius, {
    schema,
    context: buildContext,
    graphiql: true,
    ide: true,
  });
};

export default setup;
