import { Request, Response } from 'express';
import { RealEstate } from '../entities';
import { CreateSchedule } from '../interfaces';
import { schedulesServices } from '../services';

const create = async (req: Request, res: Response): Promise<Response> => {
    const idUser: number = req.body.id;
    const dataSchedule: CreateSchedule = req.body;

    await schedulesServices.create(dataSchedule,idUser);
    
    return res.status(201).json({
        message: 'Schedule created'
    });
};

const read = async (req: Request, res: Response): Promise<Response> => {
    const idRealEstate: number = +req.params.id;
    const listSchedules: void | RealEstate = await schedulesServices.read(idRealEstate);
    return res.status(200).json(listSchedules);
};

export default { create, read };