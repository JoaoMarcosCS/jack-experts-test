import { Router } from "express";
import userController from "./user.controller";
import { authenticateRequired } from "../auth/middlewares/authenticate.middleware";


const UserRouters = Router()

UserRouters.get("/user/:id", authenticateRequired, userController.findOnde);
UserRouters.post("/user", userController.create);
UserRouters.delete('/user/:id', authenticateRequired, userController.delete);
UserRouters.patch("/user/:id",authenticateRequired, userController.update)

export {UserRouters};