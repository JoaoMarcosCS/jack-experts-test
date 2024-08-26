import express from "express";
import dotenv from "dotenv";


dotenv.config();

const app = express();
                       
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log("teste:" + JSON.stringify(process.env));

export default app;