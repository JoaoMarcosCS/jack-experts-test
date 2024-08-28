import { DataTypeNotSupportedError } from "typeorm";
import { generateHash } from "../utils/generateHash";
import userRepository from "./user.repository";
import { CreateUserDto } from "./validations/create-user";
import { UpdateUserDto } from "./validations/update-user";

class UserService {

    async create(data: CreateUserDto) {

        const existUser = await userRepository.findByEmail(data.email);

        if (existUser) throw new Error("Email in use by another user");

        data.password = await generateHash(data.password);

        await userRepository.create(data);

        return true;

    }

    async findOneByEmail(email: string) {
        const result = await userRepository.findByEmail(email);

        if (!result) return false;

        return result
    }

    async findOne(id: number) {
        const result = await userRepository.findById(id);

        if (!result) return false;

        return result
    }

    async update(id: number, data: UpdateUserDto) {

        const existUser = await userRepository.findById(id);

        if (!existUser) throw new Error("User not found");

        const result = await userRepository.update(id, data);

        if (!result) throw new Error("Error at data change");

        return true;
    }

    async delete(id: number) {
        const existUser = await userRepository.findById(id);

        if (!existUser) throw new Error("User not found");

        const result = await userRepository.delete(id);

        if (!result) throw new Error("Error at exclude data");

        return true;
    }
}

export default new UserService();