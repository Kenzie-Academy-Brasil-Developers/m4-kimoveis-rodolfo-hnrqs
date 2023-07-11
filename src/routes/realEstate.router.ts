import { Router } from 'express';
import { realEstateControllers } from '../controllers';
import middlewares from '../middlewares';
import { createRealEstateSchema } from '../schemas';

export const realEstateRouter: Router = Router();

realEstateRouter.post('', middlewares.validateTokenMiddleware, middlewares.validateAdminMiddleware, middlewares.validateBody(createRealEstateSchema), realEstateControllers.create);

realEstateRouter.get('', realEstateControllers.read);