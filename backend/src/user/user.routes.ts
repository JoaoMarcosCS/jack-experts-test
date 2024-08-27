import { Router } from "express";
import {Request, Response} from "express"
import {  userRepository } from "./user.repository";
import { AppDataSource } from "../database/config/data-source";

const UserRouter = Router()

UserRouter.get("/", async (req: Request, res: Response) => {
    const UserRepository = new userRepository(AppDataSource);
    const user = UserRepository.findOne("jmcsjoso@gmail.com");
    if(!user) return res.json({})

    return res.json(user);
})


export {UserRouter};