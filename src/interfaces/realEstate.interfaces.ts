import { z } from 'zod';
import { createRealEstateSchema } from '../schemas';
import { returnRealEstateSchema } from '../schemas/realEstate.schemas';

export type CreateRealEstate = z.infer<typeof createRealEstateSchema>;
export type ReturnRealEstate = z.infer<typeof returnRealEstateSchema>;