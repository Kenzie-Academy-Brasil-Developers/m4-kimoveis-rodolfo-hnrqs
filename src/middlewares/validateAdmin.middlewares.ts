import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors';

export const validateAdminMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const admin: boolean = res.locals.decoded.admin;
    if (!admin) throw new AppError("Insufficient permission", 403);

    return next();
};