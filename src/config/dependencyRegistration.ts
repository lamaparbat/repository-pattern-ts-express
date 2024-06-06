import { InjectionMode, asClass, asValue, createContainer } from "awilix";

import UserDao from "../modules/user/dao";
import userModel from "../modules/user/models";
import UserService from "../modules/user/services";
import UserController from "../modules/user/controllers";
import UserRepository from "../modules/user/repositories";


const container = createContainer({ injectionMode: InjectionMode.PROXY });

const registerDependency = () => {
  container.register({
    userDb: asValue(userModel),
    userDao: asClass(UserDao),
    userService: asClass(UserService),
    userController: asClass(UserController),
    userRepository: asClass(UserRepository),
  });

  console.log("Dependency registered ...");
}

registerDependency();

export { container };