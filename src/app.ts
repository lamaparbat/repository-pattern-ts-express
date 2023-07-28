import express from "express";
import helmet from "helmet";
const cors = require("cors");


const app = express();


// middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());


// routes
app.get("/", () => {
  console.log("default routes");
});


export default app;