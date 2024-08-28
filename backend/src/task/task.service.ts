import userRepository from "../user/user.repository";
import taskRepository from "./task.repository";
import { UpdateTaskDto } from "./validations/update-task";

import { Task } from "../entities/task.entity";
import { CreateTaskDto } from "./validations/create-task";

class TaskService {
    async create(data: CreateTaskDto) {
        
        const user = await userRepository.findById(data.userId);

        // const task = new Task();

        // task.description = data.description;
        // task.title = data.title;
        // task.user = user;

        const result = await taskRepository.create(data);

        if (!result) throw new Error("Cannot create task");

        return result
    }

    async findByUserId(userId: number) {
        const result = await taskRepository.findByUserId(userId);
        return result
    }

    async update(taskId: number, data: UpdateTaskDto) {
        const result = await taskRepository.update(taskId, data);

        if (!result) throw new Error("Cannot update task");

        return result
    }

    async delete(taskId: number) {
        const result = await taskRepository.delete(taskId);

        if (!result) throw new Error("Cannot delete task");

        return result
    }

}

export default new TaskService()