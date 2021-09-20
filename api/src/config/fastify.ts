import Fastify from "fastify";
import dotenv from "dotenv";

import graphql from "./graphql";

dotenv.config();

const appConfig = async () => {
  const app = Fastify();

  await graphql(app);

  return app;
};

export default appConfig;
