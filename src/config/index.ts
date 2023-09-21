
import { ENVIRONMENT_STATUS } from "../shared/constants";
import mongodbConfig from "./mongodb.config";
import { container, registerDependency } from "./dependencyRegistration";

const productConfig = {};
const developmentConfig = {
  port: process.env.PORT || 8085,
  jwtSecret: process.env.jwtSecret || "hacker123",
  mongoUri : process.env.MONGODB_URL || mongodbConfig.DEV_URL,
  container, registerDependency
}

const config: any = {
  'development': developmentConfig,
  'production': productConfig
}

export default config[process.env.NODE_ENV ?? ENVIRONMENT_STATUS.DEV];