import { createUserSchema, returnedUserSchema, userReturnSchema, listUserReturnSchema, updateUserSchema } from './user.schemas';
import { loginSchema } from './login.schemas';
import { categorySchema, returnCategorySchema, returnRealEstateArray } from './category.schemas';
import { createRealEstateSchema, returnRealEstateSchema } from './realEstate.schemas';
import { createScheduleSchema } from './schedule.schemas';

export  {
    createUserSchema,
    returnedUserSchema,
    userReturnSchema,
    loginSchema,
    listUserReturnSchema,
    updateUserSchema,
    categorySchema,
    returnCategorySchema,
    returnRealEstateArray,
    createRealEstateSchema,
    returnRealEstateSchema,
    createScheduleSchema
};