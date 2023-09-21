
import { NextFunction, Request, Response } from "express";
import { ResponseDTO } from "../../../shared/dtos/response.dto";
import { MESSAGE_TEXT } from "../../../shared/constants";
import config from "../../../config";

export default class DefaultController {
  static async login (req: Request | any, res: Response, next: NextFunction) {
    try {
      console.log("enter controller...")
      const services = config.container.resolve("DefaultAdminServices");
      console.log("service", services)
      const response = await services.login(req.body);

      return new ResponseDTO(200, MESSAGE_TEXT.LOGIN_SUCCESS, response);
    } catch (error) {
      return new ResponseDTO(500, MESSAGE_TEXT.SERVER_ERROR, error);
    }
  }


}