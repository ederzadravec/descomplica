import knex from "knex";
import Dotenv from "dotenv";

Dotenv.config();

const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;

const instance = knex({
  client: "mysql2",
  connection: {
    host: DB_HOST,
    port: 3306,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
  },
});

export default instance;
