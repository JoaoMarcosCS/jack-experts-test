import 'reflect-metadata';
import express from "express";
import * as dotenv from "dotenv";
import { existsSync, unlinkSync } from 'fs';
import { UserRouters } from './user/user.routes';
import { AuthRouters } from './auth/auth.routes';
import { TaskRouters } from './task/task.routes';
import cors from "cors"
import swaggerUi from "swagger-ui-express"
import { corsOptions } from './config/corsOptions';
import swaggerDoc from "./swagger.json";

dotenv.config();

const dbFile = "db.sqlite";
if (existsSync(dbFile)) unlinkSync(dbFile);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use(UserRouters);
app.use(AuthRouters);
app.use(TaskRouters);

export default app;