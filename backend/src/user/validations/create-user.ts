import {z} from "zod"

const CreateUserSchema = z.object({
    name: z.string({required_error: "Nome é obrigatório"})
    .min(3, {message: "O nome precisa ter no mínimo três caracters"}),

    email: z.string({required_error: "Email obrigatório"}).email("Insira um email válido"),

    password: z.string({required_error: "Senha é obrigatória"})
    .min(6,{ message: "A senha precisa ter no mínimo seis caracteres"})

})
type CreateUserDto = z.infer<typeof CreateUserSchema>;

export {CreateUserSchema, CreateUserDto};