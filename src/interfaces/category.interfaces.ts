import { z } from 'zod';
import { categorySchema, returnCategorySchema, returnRealEstateArray } from '../schemas';

export type CreateCategory = z.infer<typeof categorySchema>;
export type ReturnCategory = z.infer<typeof returnCategorySchema>;
export type ReturnRealEstateArray = z.infer<typeof returnRealEstateArray>;