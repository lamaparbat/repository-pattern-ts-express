import { Router } from "express";
import { routeValidator } from "../../../shared/utils/index";
import { LoginPayload } from "../Dashboard/routes-payload-schema";
import { login } from "./controller";

const DefaultRouter = Router();

DefaultRouter.route("/login").post(routeValidator(LoginPayload), login);

export default DefaultRouter;

