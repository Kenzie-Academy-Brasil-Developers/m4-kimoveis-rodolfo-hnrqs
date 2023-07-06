import { DeepPartial } from 'typeorm';
import { z } from 'zod';
import { returnedUserSchema, createUserSchema, userReturnSchema, listUserReturnSchema, updateUserSchema } from '../schemas';

export type CreateUser = z.infer<typeof createUserSchema>;
export type ReturnedCreatedUser = z.infer<typeof returnedUserSchema>;
export type UserReturn = z.infer<typeof userReturnSchema>;
export type UserListReturn = z.infer<typeof listUserReturnSchema>;
export type UpdateUser = DeepPartial<typeof updateUserSchema>;

export interface RequestUser {
    admin: boolean,
    id: number
};