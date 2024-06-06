import mongoose from "mongoose";
import config from "../../config";

const initSequelizeConnection = async () => {}

const initMongoConnection = async () => {
  await mongoose.connect(config.mongoUri)
    .then(
      () => console.log("Mongodb connection successfull..."),
      (err) => console.log("Mongodb connection failed...", err)
    );
}

export const initConnection = async () => {
  await initMongoConnection();
  await initSequelizeConnection();
}
