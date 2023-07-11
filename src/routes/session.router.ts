import { Router } from "express";
import middlewares from "../middlewares";
import { loginSchema } from "../schemas";
import { sessionControllers } from "../controllers";

export const sessionRouter: Router = Router();

sessionRouter.post(
    "",
    middlewares.validateBody(loginSchema),
    sessionControllers.create
);