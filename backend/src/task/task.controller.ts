import { Request, Response } from "express"
import { CreateTaskSchema } from "./validations/create-task"
import taskService from "./task.service";
import { UpdateTaskSchema } from "./validations/update-task";

class TaskController {
    async create(req: Request, res: Response) {
        try {
            const safeData = CreateTaskSchema.parse(req.body);
            
            const result = await taskService.create(safeData);

            return res.status(200).json({
                ok: result
            });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({
                    error: error.message
                })
            }
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { taskId } = req.params

            const result = await taskService.delete(Number(taskId));

            return res.status(200).json({
                ok: result
            });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({
                    error: error.message
                })
            }
        }
    }

    async update(req: Request, res: Response) {
        try {

            const { taskId } = req.params
            const safeData = UpdateTaskSchema.parse(req.body);

            const result = await taskService.update(Number(taskId), safeData);

            return res.status(200).json({
                ok: result
            });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({
                    error: error.message
                })
            }
        }
    }

    async findByUserId(req: Request, res: Response) {
        try {
            const { userId } = req.params;

            const result = await taskService.findByUserId(Number(userId));

            return res.status(200).json({
                tasks: result
            });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({
                    error: error.message
                })
            }
        }
    }
}

export default new TaskController()