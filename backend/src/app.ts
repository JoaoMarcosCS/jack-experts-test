import 'reflect-metadata';
import express from "express";
import * as dotenv from "dotenv";
import UserRepository from "./user/user.repository"

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", UserRepository.index)

export default app;