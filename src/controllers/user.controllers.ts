import { Request, Response } from 'express';
import { userServices } from '../services';
import { UserReturn, CreateUser } from '../interfaces'
import { UserListReturn, UpdateUser } from '../interfaces';

const create = async (req: Request, res: Response): Promise<Response> => {
    const user: CreateUser = req.body;
    const newUser: UserReturn = await userServices.create(user);

    return res.status(201).json(newUser);

};

const read = async (req: Request, res: Response): Promise<Response> => {
    const user: UserListReturn = await userServices.read();
    return res.status(200).json(user);

};

const update = async (req: Request, res: Response): Promise<Response> => {
    const dataUser: UpdateUser = req.body;
    const idUser: number = Number(req.params.id);

    const userUpdated: UserReturn = await userServices.update(dataUser, idUser);

    return res.status(200).json(userUpdated);

};

const softDelete = async (req: Request, res: Response): Promise<Response> => {
    const idToDelete: number = Number(req.params.id);

    await userServices.softDelete(idToDelete);

    return res.status(204).send();

}

export default { create, read, update, softDelete };