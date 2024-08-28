import 'reflect-metadata';
import express from "express";
import * as dotenv from "dotenv";
import { existsSync, unlinkSync } from 'fs';
import {  UserRouters } from './user/user.routes';
import { AuthRouters } from './auth/auth.routes';
import { TaskRouters } from './task/task.routes';

dotenv.config();

const dbFile = "db.sqlite";
if(existsSync(dbFile)) unlinkSync(dbFile);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(UserRouters);
app.use(AuthRouters);
app.use(TaskRouters);

export default app;