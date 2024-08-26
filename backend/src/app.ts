import 'reflect-metadata';
import express from "express";
import * as dotenv from "dotenv";
import userRepository from "./user/user.repository";
import dataSource from './database/config/data-source';
dotenv.config();

const app = express();                       

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", userRepository.findOne);


export default app;