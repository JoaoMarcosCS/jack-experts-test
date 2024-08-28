import { AppDataSource } from "../database/config/data-source";
import { Task } from "../entities/task.entity";
import { CreateTaskDto } from "./validations/create-task";
import { UpdateTaskDto } from "./validations/update-task";

class TaskRepository {

    async create(data: CreateTaskDto) {
        const command = await AppDataSource.manager.createQueryBuilder()
            .insert()
            .into(Task)
            .values({
                description: data.description,
                title: data.title,
                user: {
                    id: data.userId
                }
            })
            .execute()

        if (!command.identifiers) return false;

        return true;
    }

    async findByUserId(userId: number) {
        const data = await AppDataSource.manager.find(Task, {
            where: {
                user: {
                    id: userId
                }
            },
            order: {
                createdAt: "desc"
            }
        })

        return data;
    }

    async update(taskId:number, data: UpdateTaskDto) {

        const command = await AppDataSource.manager.createQueryBuilder()
            .update(Task)
            .set(data)
            .where("id = :id", { id: taskId })
            .execute();

        if (command.affected === 0) return false;

        return true

    }

    async delete(taskId: number) {
        const command = await AppDataSource.manager.createQueryBuilder()
            .delete()
            .from(Task)
            .where("id = :id", { id: taskId })
            .execute()

        if (command.affected === 0) return false

        return true;
    }
}

export default new TaskRepository();