import { Repository } from 'typeorm';
import { compare } from 'bcryptjs';
import { User } from '../entities';
import { AppError } from '../errors';
import { AppDataSource } from '../data-source';
import { RequestUser, Login, LoginReturn } from '../interfaces';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const create = async ({ email, password, }: Login): Promise<LoginReturn> => {

    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const user: User | null = await userRepo.findOneBy({ email });

    if (!user) {
        throw new AppError('Invalid credentials', 401);
    }

    const passwordMatch: boolean = await compare(password, user.password);

    if (!passwordMatch) {
        throw new AppError('Invalid credentials', 401);
    }

    if (user.deletedAt) {
        throw new AppError('Invalid credentials', 401);
    }

    const token: string = jwt.sign(
        {
            admin: user.admin
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: process.env.EXPIRES_IN!,
            subject: String(user.id)
        }
    )

    return { token };
};

export default { create };