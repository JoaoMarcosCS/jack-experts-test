import {Router} from "express"
import authController from "./auth.controller"

const AuthRouters = Router()

AuthRouters.post("/signin", authController.signin);

export {AuthRouters};