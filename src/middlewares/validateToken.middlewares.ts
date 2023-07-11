import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors';
import jwt, { verify } from 'jsonwebtoken';
import 'dotenv/config';

export const validateTokenMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const authorization: string | undefined = req.headers.authorization;
    if (!authorization) throw new AppError("Missing bearer token", 401);

    const [_bearer, token]: Array<string> = authorization.split(" ");

    res.locals = {
        ...res.locals,
        decoded: verify(token, process.env.SECRET_KEY!),
    };

    return next();
};