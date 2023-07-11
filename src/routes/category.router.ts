import { Router } from 'express';
import { categoryControllers } from '../controllers';
import middlewares from '../middlewares';
import { categorySchema } from '../schemas';

export const categoryRouter: Router = Router();

categoryRouter.post('', middlewares.validateTokenMiddleware, middlewares.validateAdminMiddleware, middlewares.validateBody(categorySchema), categoryControllers.create);

categoryRouter.get('', categoryControllers.read);

categoryRouter.get('/:id/realEstate', middlewares.validateIdMiddleware, categoryControllers.readRealEstates);