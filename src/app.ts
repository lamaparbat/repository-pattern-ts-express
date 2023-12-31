
import express from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());

// routes
app.get("/", (req, res) => {
  res.send("Server has started....")
});

export default app;