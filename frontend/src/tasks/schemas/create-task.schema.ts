import {z} from "zod";


export const CreateTaskSchema = z.object({
    title: z.string({required_error: "O título é obrigatório"})
    .min(1, {message: "O título precisa ter mais de um caracter"}),

    description: z.string({required_error: "A descrição é obrigatória"})
    .min(1, {message: "A descrição precisa ter mais de um caracter"}),
})

export type CreateTaskProps = z.infer<typeof CreateTaskSchema>;