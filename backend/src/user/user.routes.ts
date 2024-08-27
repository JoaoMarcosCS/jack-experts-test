import { Router } from "express";
import userController from "./user.controller";


const UserRouters = Router()

UserRouters.get("/user/:id", userController.findOnde);
UserRouters.post("/user", userController.create);
UserRouters.delete('/user/:id', userController.delete);
UserRouters.patch("/user/:id", userController.update)

export {UserRouters};