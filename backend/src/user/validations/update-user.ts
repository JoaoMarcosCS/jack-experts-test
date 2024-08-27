import {z} from "zod"

const UpdateUserSchema = z.object({
    // id: z.number({required_error: "ID do usuário é obrigatório"}).min(0),

    name: z.string()
    .min(3, {message: "O nome precisa ter no mínimo três caracters"})
    .optional(),

    email: z.string().email("Insira um email válido").optional(),

    password: z.string()
    .min(6,{ message: "A senha precisa ter no mínimo seis caracteres"}).optional()

})

type UpdateUserDto = z.infer<typeof UpdateUserSchema>;

export {UpdateUserSchema, UpdateUserDto};