import {z} from "zod";


export const UpdateTaskSchema = z.object({

    id: z.number().min(1),

    title: z.string({required_error: "O título é obrigatório"})
    .min(1, {message: "O título precisa ter mais de um caracter"}).optional(),

    description: z.string({required_error: "A descrição é obrigatória"})
    .min(1, {message: "A descrição precisa ter mais de um caracter"}).optional()
})

export type UpdateTaskProps = z.infer<typeof UpdateTaskSchema>;