import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Category, User } from '../entities';
import { AppError } from '../errors';

export const validateIdMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    if(req.originalUrl == `/categories/${req.params.id}/realEstate`){
        const routeId = Number(req.params.id);
        const repoCategory: Repository<Category> = AppDataSource.getRepository(Category);
        
        const idFound = await repoCategory.findOneBy({
            id: routeId
        });
    
        if(!idFound){
            throw new AppError('Category not found', 404);
        };

        return next();
    }

    const routeId = Number(req.params.id);
    const repoUser: Repository<User> = AppDataSource.getRepository(User);
    
    const idFound = await repoUser.findOneBy({
        id: routeId
    });

    if(!idFound){
        throw new AppError('User not found', 404);
    }

    return next();

};