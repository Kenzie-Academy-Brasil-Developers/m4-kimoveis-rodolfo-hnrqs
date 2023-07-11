import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { User } from '../entities';
import { AppError } from '../errors';

export const validateEmailMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    
    const userRepo: Repository<User> = AppDataSource.getRepository(User);
    const emailExists: User | null = await userRepo.findOne({
        where:{
            email: req.body.email
        }
    });

    if(!emailExists){
        return next()
    };

    throw new AppError('Email already exists', 409);

};