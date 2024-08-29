import { z } from "zod"

const UpdateTaskSchema = z.object({

    title: z.string()
        .min(1, { message: "Tilte must have at least one character" })
        .optional(),

    description: z.string().optional(),

    isFavorite: z.boolean().optional(),

    status: z.string().optional()

});

type UpdateTaskDto = z.infer<typeof UpdateTaskSchema>;

export { UpdateTaskDto, UpdateTaskSchema }