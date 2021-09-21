import "reflect-metadata";
import appConfig from "app/config/fastify";

const PORT: string = process.env.APP_PORT || "8000";
const HOST: string = process.env.APP_HOST || "127.0.0.1";

const start = async () => {
  const app = await appConfig();

  try {
    await app.listen(PORT, HOST);
    console.log(`\napp listening in ${HOST}:${PORT}`);
  } catch (e) {
    console.log(e);
    app.log.error(e);
  }
};

start();
