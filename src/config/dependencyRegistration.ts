import { InjectionMode, asClass, createContainer } from "awilix";

import DefaultAdminServices from "../modules/admin/Default/services";
import DefaultController from "../modules/admin/Default/controller";
import DefaultRepository from "../modules/admin/Default/repository";

// Modules: /admin
const container = createContainer({ injectionMode: InjectionMode.PROXY  });

const registerDependency = () => {
  container.register({
    defaultAdminServices: asClass(DefaultAdminServices),
    defaultAdminController: asClass(DefaultController),
    defaultRepository: asClass(DefaultRepository),

  });
}

export {container, registerDependency};