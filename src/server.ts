import app from "./app";
import { registerDependency } from "./config/dependencyRegistration";
import config from "./config/index";
import AdminRouter from "./modules/admin";
import { initConnection } from "./shared/utils";

initConnection().then(() => {
  registerDependency();
  app.use("/v1", [AdminRouter]);
  app.listen(config.port, () => console.log(`Server has started at port ${config.port}....`));
});
