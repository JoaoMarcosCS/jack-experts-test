import { User } from "../../entities/user.entity";

export interface CreateTaskDto {
    title: string;
    description?:string;
    userId: number
}