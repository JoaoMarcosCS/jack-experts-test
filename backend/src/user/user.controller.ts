import { Request, Response } from "express";
import { CreateUserSchema } from "./validations/create-user";
import userService from "./user.service";
import { UpdateUserSchema } from "./validations/update-user";

class UserController {
    async create(req: Request, res: Response) {
        try {
            const safeData = CreateUserSchema.parse(req.body);

            const result = await userService.create(safeData);

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
            const { id } = req.params;

            const safeData = UpdateUserSchema.parse(req.body);

            const result = await userService.update(Number(id), safeData);

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
            const { id } = req.params;

            const result = await userService.delete(Number(id));

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

    async findOnde(req: Request, res: Response) {
        const { id } = req.params

        const result = await userService.findOne(Number(id));

        return res.status(200).json({
            user: result
        });
    }
}

export default new UserController();
