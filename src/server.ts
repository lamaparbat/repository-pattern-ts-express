import app from "./app";
import config from "./config/index";
import adminRouter from "./modules/user";
import { initConnection } from "./shared/utils";

initConnection().then(async () => {
  app.use("/", [adminRouter]);
  app.listen(config.port, () => console.log(`${process.env.NODE_ENV} Server has started at port ${config.port}....`));
});
