import {z} from "zod"

const UpdateUserSchema = z.object({
    // id: z.number({required_error: "ID do usuário é obrigatório"}).min(0),

    name: z.string()
    .min(3, {message: "Name must have at least three characters"})
    .optional(),

    email: z.string().email("Invalid email").optional(),

    password: z.string()
    .min(6,{ message: "Password must have at least six characters"}).optional()

})

type UpdateUserDto = z.infer<typeof UpdateUserSchema>;

export {UpdateUserSchema, UpdateUserDto};