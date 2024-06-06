
import { ENVIRONMENT_STATUS } from "../shared/constants";
import { container, registerDependency } from "./dependencyRegistration";

const productConfig = {
  port: process.env.PORT || 8085,
  mongoUri : process.env.MONGODB_URL,
  jwtSecret: process.env.jwtSecret || "hacker123",
};

const developmentConfig = {
  port: process.env.PORT || 8085,
  mongoUri : process.env.MONGODB_URL,
  jwtSecret: process.env.jwtSecret || "hacker123",
  container, registerDependency
}

const config: any = {
  'development': developmentConfig,
  'production': productConfig
}

export default config[process.env.NODE_ENV ?? ENVIRONMENT_STATUS.DEV];