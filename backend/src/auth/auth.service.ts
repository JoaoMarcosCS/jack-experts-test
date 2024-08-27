import userService from "src/user/user.service";
import { AuthPayloadDto } from "./interfaces/auth-payload.dto";
import * as bcrypt from "bcrypt";
import { sign } from "jsonwebtoken"
import { env } from "../environment/env";

class AuthorizationService {
    
    async signin(payload: AuthPayloadDto) {
        const existUser = await userService.findOneByEmail(payload.email)

        if (!existUser) throw new Error("Usuário não encontrado");

        const isCorrectPassword = await bcrypt.compare(payload.password, existUser.password);

        if (!isCorrectPassword) throw new Error("Senha incorreta");

        const { name, email } = existUser;

        const acessToken = sign({ name, email }, env.TOKEN_SECRET, {
            expiresIn: env.TOKEN_EXPIRATION
        })

        return { acessToken: acessToken }
    }
}

export default new AuthorizationService