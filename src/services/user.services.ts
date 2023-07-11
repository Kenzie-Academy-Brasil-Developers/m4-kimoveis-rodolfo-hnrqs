import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { User } from '../entities'
import { AppError } from '../errors';
import { CreateUser } from '../interfaces';
import { UserListReturn, UpdateUser, UserReturn } from '../interfaces';
import { listUserReturnSchema, userReturnSchema } from '../schemas';

const create = async (dataUser: CreateUser): Promise<UserReturn> => {

    const userRepo: Repository<User> = AppDataSource.getRepository(User);
    const user: User = userRepo.create(dataUser);
    await userRepo.save(user);

    const newUser: UserReturn = userReturnSchema.parse(user);

    return newUser;

};

const read = async (): Promise<UserListReturn> => {

    const userRepo: Repository<User> = AppDataSource.getRepository(User);
    const users: User[] = await userRepo.find();

    const usersReturn: UserListReturn = listUserReturnSchema.parse(users);
    return usersReturn;

};

const update = async (dataUser: UpdateUser, idUser: number): Promise<UserReturn> => {

    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const findUser: User | null = await userRepo.findOneBy({
        id: idUser
    });

    const newUser: User = userRepo.create({
        ...findUser,
        ...dataUser
    });

    const updatedUser: UserReturn = userReturnSchema.parse(await userRepo.save(newUser));

    return updatedUser;
};

const softDelete = async (idToDelete: number): Promise<void> => {

    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const findUser: User | null = await userRepo.findOneBy({
        id: idToDelete
    });

    if (findUser?.deletedAt) {
        throw new AppError('User not found', 404)
    };

    const deletedUser = {
        ...findUser,
        deletedAt: String(new Date())
    };

    userReturnSchema.parse(await userRepo.save(deletedUser));

    return;
};

export default { create, read, update, softDelete };