import { z } from 'zod';
import { loginSchema } from '../schemas';

export type Login = z.infer<typeof loginSchema>;