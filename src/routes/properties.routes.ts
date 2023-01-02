import { Router } from "express";
import { createPropertieController, listPropertiesController } from "../controllers/properties.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import { userIsAdmMiddleware } from "../middlewares/ensureUserIsAdm.middleware";


const propertiesRouter = Router();

propertiesRouter.post('',ensureAuthMiddleware, userIsAdmMiddleware, createPropertieController)

propertiesRouter.get('', listPropertiesController)

export default propertiesRouter;