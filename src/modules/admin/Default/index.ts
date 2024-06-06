import { RequestHandler, Router } from "express";

import DefaultController from "./controller";
import { routeValidator } from "../../../shared/utils";
import { LoginPayload } from "../Dashboard/routes-payload-schema";

const DefaultRouter = Router();

DefaultRouter.route("/login").post(routeValidator(LoginPayload), DefaultController.login as RequestHandler);

export default DefaultRouter;

