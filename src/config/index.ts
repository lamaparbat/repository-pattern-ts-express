
import mongodbConfig from "./mongodb.config";

const config = {
  port: 8085,
  ...mongodbConfig,
  
}

export default config