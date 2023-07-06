import { z } from 'zod';

export const createScheduleSchema = z.object({
    date: z.string(),
    hour: z.string().max(10),
    realEstateId: z.number().int().positive()
})