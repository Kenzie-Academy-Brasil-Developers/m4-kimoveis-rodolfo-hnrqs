import { z } from 'zod';
import { createScheduleSchema } from '../schemas';

export type CreateSchedule = z.infer<typeof createScheduleSchema>;