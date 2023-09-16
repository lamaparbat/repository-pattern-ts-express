
import express from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

// middlewares
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(helmet());

// routes
app.get("/", (req, res) => {
  res.send("Server has started....")
});

export default app;