import { Router } from 'express';
import { schedulesControllers } from '../controllers';
import middlewares from '../middlewares';
import { createScheduleSchema } from '../schemas';

export const scheduleRouter: Router = Router();

scheduleRouter.post('', middlewares.validateTokenMiddleware, middlewares.validateBody(createScheduleSchema), schedulesControllers.create);

scheduleRouter.get('/realEstate/:id', middlewares.validateTokenMiddleware, middlewares.validateAdminMiddleware, schedulesControllers.read);