import { z } from "zod";

export const UpdateUserSchema = z.object({
    name: z.string().min(3, { message: "O nome precisa ter no mínimo 3 letras" }).optional(),

    email: z.string().email().optional(),

    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres").optional()
})

export type UpdateUserProps = z.infer<typeof UpdateUserSchema>;