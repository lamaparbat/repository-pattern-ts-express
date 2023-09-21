import { RequestHandler, Router } from "express";
import { routeValidator } from "../../../shared/utils/index";
import { LoginPayload } from "../Dashboard/routes-payload-schema";
import DefaultController from "./controller";

const DefaultRouter = Router();

DefaultRouter.route("/login").post(routeValidator(LoginPayload), DefaultController.login as RequestHandler);

export default DefaultRouter;

