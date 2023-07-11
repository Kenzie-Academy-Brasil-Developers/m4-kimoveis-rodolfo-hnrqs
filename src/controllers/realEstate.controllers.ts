import { Request, Response } from 'express';
import { RealEstate } from '../entities';
import { realEstateServices } from '../services';

const create = async (req: Request, res: Response): Promise<Response> => {
    const dataRealEstate: any = req.body;
    const newRealEstate: RealEstate = await realEstateServices.create(dataRealEstate);
    return res.status(201).json(newRealEstate);
};

const read = async (req: Request, res: Response): Promise<Response> => {
    const listRealEstate: RealEstate[] = await realEstateServices.read();
    return res.status(200).json(listRealEstate);
};

export default { create, read };