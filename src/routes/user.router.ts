import { Router } from 'express';
import middlewares from '../middlewares';
import { userControllers } from '../controllers';
import { createUserSchema, updateUserSchema } from '../schemas';

export const userRouter: Router = Router()

userRouter.post('', middlewares.validateBody(createUserSchema), middlewares.validateEmailMiddleware, userControllers.create);

userRouter.get('', middlewares.validateTokenMiddleware, middlewares.validateAdminMiddleware, userControllers.read);

userRouter.patch('/:id', middlewares.validateIdMiddleware, middlewares.validateTokenMiddleware, middlewares.validateAdminMiddleware, middlewares.validateBody(updateUserSchema), userControllers.update);

userRouter.delete('/:id', middlewares.validateIdMiddleware, middlewares.validateTokenMiddleware, middlewares.validateAdminMiddleware, middlewares.validateBody(updateUserSchema), userControllers.softDelete);