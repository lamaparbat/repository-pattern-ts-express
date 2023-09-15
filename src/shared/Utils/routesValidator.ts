import { Request, Response, NextFunction } from "express";
import Joi from "joi";


export const routeValidator = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    console.log({error})
  }
}