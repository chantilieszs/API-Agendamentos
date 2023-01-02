import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controllers/user.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { userIsAdmMiddleware, userIsAdmUpdateMiddleware,  } from "../middlewares/ensureUserIsAdm.middleware";
import { userSerializer, updateUserSerializer } from "../serializers/user.serializers";

const userRouter = Router();

userRouter.post('', ensureDataIsValidMiddleware(userSerializer), createUserController)
userRouter.get('', ensureAuthMiddleware, userIsAdmMiddleware, listUsersController)
userRouter.patch('/:id', ensureAuthMiddleware, userIsAdmUpdateMiddleware, ensureDataIsValidMiddleware(updateUserSerializer), updateUserController)
userRouter.delete('/:id', ensureAuthMiddleware, userIsAdmMiddleware, deleteUserController)


export default userRouter;