import { Router } from "express";
import { routeValidator } from "../../../shared/utils/index";
import { GetAdminLists } from "./routes-payload-schema";
import { getAdminLists } from "./controller";

const DashboardRouter = Router();

// middleware
// DashboardRouter.use();


DashboardRouter.route("/dashboard").get(getAdminLists);


export default DashboardRouter;

