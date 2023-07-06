import { z } from 'zod';

export const createRealEstateSchema = z.object({
    value: z.number().positive().or(z.string()),
    size: z.number().int().positive(),
    address: z.object({
        street: z.string().min(1).max(45),
        zipCode: z.string().max(8),
        number: z.string().max(7).nullable().optional(),
        city: z.string().min(1).max(20),
        state: z.string().max(2)
    }),
    categoryId: z.number()
})

export const returnRealEstateSchema = z.object({
    id: z.number(),
    value: z.number().positive().or(z.string()),
    size: z.number().int().positive(),
    sold: z.boolean().default(false),
    address: z.object({
        id: z.number(),
        street: z.string().min(1).max(45),
        zipCode: z.string().max(8),
        number: z.string().max(7).nullable().optional(),
        city: z.string().min(1).max(20),
        state: z.string().max(2)
    }),
    createdAt: z.string(),
    updatedAt: z.string()
})