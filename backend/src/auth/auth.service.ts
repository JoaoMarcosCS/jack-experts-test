import userService from "../user/user.service";
import { AuthRequestDto } from "./interfaces/auth-payload.dto";
import * as bcrypt from "bcrypt";
import { sign } from "jsonwebtoken"
import { env } from "../environment/env";

export class AuthService {
    
    async signin(payload: AuthRequestDto) {
        const existUser = await userService.findOneByEmail(payload.email)

        if (!existUser) throw new Error("User not found");

        const isCorrectPassword = await bcrypt.compare(payload.password, existUser.password);

        if (!isCorrectPassword) throw new Error("Password invalid");

        const { name, email, id } = existUser;

        const accessToken = sign({ name, email, id, type: "access" }, env.TOKEN_SECRET, {
            expiresIn: env.TOKEN_EXPIRATION
        })

        return { accessToken: accessToken }
    }
}

export default new AuthService();