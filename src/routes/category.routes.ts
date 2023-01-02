import { Router } from "express";
import { createCategoryController, listCategoryController, listPropertiesByCategoryController } from "../controllers/categories.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import { userIsAdmMiddleware } from "../middlewares/ensureUserIsAdm.middleware";


const categoriesRouter = Router();

categoriesRouter.post('', ensureAuthMiddleware, userIsAdmMiddleware, createCategoryController)
categoriesRouter.get('', listCategoryController)
categoriesRouter.get('/:id/properties', listPropertiesByCategoryController)


export default categoriesRouter;