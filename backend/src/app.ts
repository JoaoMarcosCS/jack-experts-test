import express from "express";
import dotenv from "dotenv";
import { env } from "./environment/env";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log("teste:" + JSON.stringify(process.env));
console.log(env.TESTE);
export default app;