import { z } from "zod"

export const CreateUserSchema = z.object({
    name: z.string({
        required_error: "Nome é obrigatório",
        invalid_type_error: "Nome precisa ser um texto"
      }).min(3, { message: "O nome precisa ter no mínimo 3 letras" }),

      email: z.string({
        required_error: "Email obrigatório"
      }).email("Insira um email válido"),


      password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
})

export type CreateUserProps = z.infer<typeof CreateUserSchema>