import Joi from "joi";
import { Request, Response, NextFunction } from "express";

import { ResponseDTO } from "../dtos/response.dto";


export const routeValidator = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (!error) next();
    else {
      const { details } = error;
      res.status(400).send(new ResponseDTO(400, details[0].message, null));
    }
  }
}