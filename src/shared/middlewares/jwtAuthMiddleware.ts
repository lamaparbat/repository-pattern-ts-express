import jwt from "jsonwebtoken";
import config from "../../config";
import { STATUS_CODES } from "http";
import { ResponseDTO } from "../dtos/response.dto";
import { NextFunction, Request, Response } from "express";

const jwtAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const jwtToken = req.headers["authorization"];

  if (!jwtToken) return res.status(401).send(new ResponseDTO(401, STATUS_CODES["401"], null));

  const decodeJwtToken = jwt.verify(jwtToken, config.jwtSecret, (err: any, user: any) => {
    if (err) return res.status(403).send(new ResponseDTO(403, STATUS_CODES["403"], null));

    next();
  });

}


export default jwtAuthMiddleware;