import 'reflect-metadata';
import express, {Response} from "express";
import * as dotenv from "dotenv";
import router from './user/user.routes';

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


export default app;