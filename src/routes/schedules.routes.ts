import { Router } from "express";
import { listSchedulesController, createScheduleController } from "../controllers/schedules.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const schedulesRouter = Router();

schedulesRouter.post('', ensureAuthMiddleware, createScheduleController)
schedulesRouter.get('/properties/:id', listSchedulesController)


export default schedulesRouter;