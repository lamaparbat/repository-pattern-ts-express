import { Router } from "express";
import { getAdminLists } from "./controller";
import jwtAuthMiddleware from "../../../shared/middlewares/jwtAuthMiddleware";

const DashboardRouter = Router();

DashboardRouter.use(jwtAuthMiddleware);
DashboardRouter.route("/dashboard").get(getAdminLists);

export default DashboardRouter;

