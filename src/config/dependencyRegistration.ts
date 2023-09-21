import { InjectionMode, asClass, createContainer } from "awilix";

// Routes: '/admin'
import DefaultAdminServices from "../modules/admin/Default/services";
import DefaultController from "../modules/admin/Default/controller";
import DefaultRepository from "../modules/admin/Default/repository";

const container = createContainer({ injectionMode: InjectionMode.PROXY  });
const registerDependency = () => {
  container.register({
    defaultAdminServices: asClass(DefaultAdminServices),
    defaultAdminController: asClass(DefaultController),
    defaultRepository: asClass(DefaultRepository),

  });
  console.log("Dependency registered ...");
}

export {container, registerDependency};