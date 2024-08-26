import { Repository } from "typeorm";
import { User } from "./user.entity";
import connection from "../database/config/data-source"

class UserService {
    private repo: Repository<User>;

    async initialize() {
        this.repo = (await connection).getRepository(User);
    }

    constructor() {
        this.initialize();
    }

    async index() {
        const response = await this.repo.find();
        console.log("Aqui");
        return "vazio";
    }


}

export default new UserService();