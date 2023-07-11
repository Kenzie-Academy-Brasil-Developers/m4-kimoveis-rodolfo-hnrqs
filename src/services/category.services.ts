import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Category } from '../entities';
import { AppError } from '../errors';
import { ReturnCategory, CreateCategory } from '../interfaces';

const create = async (newCategory: CreateCategory): Promise<ReturnCategory> => {
    const categoryRec: string = newCategory.name;

    const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category);

    const findCategory: Category | null = await categoryRepo.findOneBy({
        name: categoryRec
    });
    
    if(findCategory){
        throw new AppError('Category already exists', 409)
    };

    const category: ReturnCategory = categoryRepo.create(newCategory);
    await categoryRepo.save(category);

    return category;

};

const read = async (): Promise<Category[]> => {
    const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category);
    const listCategories: Category[] = await categoryRepo.find();

    return listCategories;
};

const listRealEstatePerId = async (idCategory: number): Promise<Category | null> => {
    const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category);

    const findCategory: Category | null = await categoryRepo.findOne({
        relations:{
            realEstate: true
        },
        where:{
            id: idCategory
        }
    });

    return findCategory;
};

export default { create, read, listRealEstatePerId };