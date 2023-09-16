import { Router } from "express";
import DefaultRouter from "./Default";
import DashboardRouter from "./Dashboard";

const AdminRouter = Router();

AdminRouter.use("/admin", DefaultRouter);
AdminRouter.use("/admin/dashboard", DashboardRouter);

export default AdminRouter;