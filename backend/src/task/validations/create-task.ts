import { z } from "zod"


const CreateTaskSchema = z.object({
    title: z.string({required_error: "Title is required"})
    .min(1, {message: "Tilte must have at least one character"}),

    description: z.string().optional(),

    userId: z.number({required_error: "UserId is required"})
});

type CreateTaskDto = z.infer<typeof CreateTaskSchema>;

export { CreateTaskDto, CreateTaskSchema}