
import { NextFunction, Request, Response } from "express";

const login = (req: Request, res: Response, next: NextFunction) => {
  const {email, password} = req.body;
  console.log({email, password})
  return res.status(200).send("hjacker")
}

export {
  login
}