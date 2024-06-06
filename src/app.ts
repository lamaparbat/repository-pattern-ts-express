
import express from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/", (req, res) => {
  res.send(`${process.env.NODE_ENV} Server has started....`);
});

export default app;