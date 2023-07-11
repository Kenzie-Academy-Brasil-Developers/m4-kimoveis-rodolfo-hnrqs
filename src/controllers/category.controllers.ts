import { Request, Response } from 'express';
import { categoryServices } from '../services';
import { CreateCategory, ReturnCategory } from '../interfaces';
import { Category } from '../entities';

const create = async (req: Request, res: Response): Promise<Response> => {
    const category: CreateCategory = req.body;
    const newCategory: ReturnCategory = await categoryServices.create(category);
    return res.status(201).json(newCategory);

};

const read = async (req: Request, res: Response): Promise<Response> => {
    const categories: Category[] = await categoryServices.read();
    return res.status(200).json(categories);

};

const readRealEstates = async (req: Request, res: Response): Promise<Response> => {
    const realEstates: Category | null = await categoryServices.listRealEstatePerId(+req.params.id);
    return res.status(200).json(realEstates);

};

export default { create, read, readRealEstates };