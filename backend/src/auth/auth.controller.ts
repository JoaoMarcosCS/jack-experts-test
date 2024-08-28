import { Request, Response } from "express";
import authService from "./auth.service";

class AuthController {

    async signin(req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            const accessToken = await authService.signin({ email, password });

            return res.status(200).json(accessToken);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({
                    error: error.message
                })
            }
        }
    }
}

export default new AuthController();