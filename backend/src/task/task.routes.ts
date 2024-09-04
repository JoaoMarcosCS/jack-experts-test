import { Router } from "express";
import { authenticateRequired } from "../auth/middlewares/authenticate.middleware";
import taskController from "./task.controller";

const TaskRouters = Router();

TaskRouters.get("/task/:userId", authenticateRequired, taskController.findByUserId);
TaskRouters.post("/task", authenticateRequired, taskController.create);
TaskRouters.delete('/task/:taskId', authenticateRequired, taskController.delete);
TaskRouters.patch("/task/:taskId", authenticateRequired, taskController.update);
TaskRouters.get('/search-task/:userId',authenticateRequired, taskController.findByTitle);
TaskRouters.get("/favorites/:userId", authenticateRequired, taskController.findOnlyFavorites)

export {TaskRouters};