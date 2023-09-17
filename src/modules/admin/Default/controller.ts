
import { NextFunction, Request, Response } from "express";
import services from "./services";
import { ResponseDTO } from "../../../shared/dtos/response.dto";
import { MESSAGE_TEXT } from "../../../shared/constants";

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await services.login(req.body);

    return new ResponseDTO(200, MESSAGE_TEXT.LOGIN_SUCCESS, response);
  } catch (error) {
    return new ResponseDTO(200, MESSAGE_TEXT.LOGIN_FAILED, error);
  }
}

export default {
  login
}