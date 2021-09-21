import Dotenv from "dotenv";
import path from "path";

Dotenv.config();

const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;

export default {
  client: "mysql2",
  connection: {
    host: DB_HOST,
    port: 3306,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
  },
  seeds: {
    directory: path.resolve(__dirname, "database", "seeds"),
  },
  migrations: {
    directory: path.resolve(__dirname, "database", "migrations"),
  },
  useNullAsDefault: true,
};
