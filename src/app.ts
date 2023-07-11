import "express-async-errors";
import "reflect-metadata";
import express, { Application, json } from "express";
import middlewares from "./middlewares";
import { userRouter } from './routes/user.router';
import { sessionRouter } from "./routes/session.router";
import { realEstateRouter } from './routes/realEstate.router';
import { categoryRouter } from './routes/category.router';
import { scheduleRouter } from "./routes/schedules.router";

const app: Application = express();
app.use(json());

app.use("/users", userRouter);

app.use("/login", sessionRouter);

app.use("/categories", categoryRouter);

app.use("/realEstate", realEstateRouter);

app.use("/schedules", scheduleRouter);

app.use(middlewares.handleError);

export default app;