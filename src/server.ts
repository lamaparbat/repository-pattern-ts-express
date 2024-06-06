import app from "./app";
import config from "./config/index";
import AdminRouter from "./modules/admin";
import { initConnection } from "./shared/utils";
import { registerDependency } from "./config/dependencyRegistration";

initConnection().then(() => {
  registerDependency();
  app.use("/v1", [AdminRouter]);
  app.listen(config.port, () => console.log(`${process.env.NODE_ENV} Server has started at port ${config.port}....`));
});
