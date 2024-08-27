import 'reflect-metadata';
import express, { NextFunction } from "express";
import * as dotenv from "dotenv";
import { existsSync, unlinkSync } from 'fs';
import { Request, Response } from 'express';
import {  UserRouters } from './user/user.routes';

dotenv.config();

const dbFile = "db.sqlite";
if(existsSync(dbFile)) unlinkSync(dbFile);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(UserRouters);

// app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
//     if(error instanceof Error){
//         return res.status(400).json({
//             error: error.message
//         })
//     }

//     return res.status(500).json({
//         error: error
//     })
// })

export default app;