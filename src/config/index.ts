
import mongodbConfig from "./mongodb.config";

const config = {
  port: 8085,
  jwtSecret: process.env.jwtSecret || "hacker123",
  ...mongodbConfig,
}

export default config