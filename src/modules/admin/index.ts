import { Router } from "express";
import DashboardRouter from "./Dashboard/";


const AdminRouter = Router();

AdminRouter.use("/admin", DashboardRouter);

export default AdminRouter;