import { Repository } from "typeorm"
import { User } from "./user.entity"
import dataSource from "../database/config/data-source"

class UserRepository {

    private repo: Repository<User>;

    private async initialize() {
        this.repo = (await dataSource).getRepository(User);
    }

    constructor() {
        this.initialize();
    }

    public async findOne() {
        const response = await this.repo.find();
        if (response.length === 0) return "Vazio"

        return response;
    }
}

export default new UserRepository()