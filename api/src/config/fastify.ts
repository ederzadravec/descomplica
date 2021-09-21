import Fastify from "fastify";
import fastifyCors from "fastify-cors";
import dotenv from "dotenv";

import graphql from "./graphql";

dotenv.config();

const appConfig = async () => {
  const app = Fastify();

  app.register(fastifyCors, { origin: "*", methods: "*" });

  await graphql(app);

  return app;
};

export default appConfig;
