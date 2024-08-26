import 'reflect-metadata';
import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



export default app;