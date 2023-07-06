import { z } from 'zod';

export const categorySchema = z.object({
    name: z.string().min(1).max(45)
})

export const returnCategorySchema = categorySchema.extend({
    id: z.number()
})

export const returnRealEstateArray = returnCategorySchema.array()