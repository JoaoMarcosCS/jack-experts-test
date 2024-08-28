import { NextFunction, Request, Response } from "express";
import { AuthService } from "../auth.service";
import jwt, { JwtPayload } from "jsonwebtoken";
import { env } from "../../environment/env";
import userService from "../../user/user.service";

export const authenticateRequired = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({
        errors: "Token not found"
    })

    const [, token] = authorization.split(" ");

    try {
        const payload = jwt.verify(token, env.TOKEN_SECRET) as JwtPayload;
        const { email } = payload;

        const user = await userService.findOneByEmail(email);

        if (!user) return res.status(404).json({
            error: "User not found"
        })

        return next();
    } catch (error) {
        if (error instanceof Error) {
            return res.status(401).json({
                error: error.message
            })
        }
    }
}