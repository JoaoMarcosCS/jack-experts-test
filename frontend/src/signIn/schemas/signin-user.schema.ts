import { z } from "zod"

export const SignInUserSchema = z.object({
      email: z.string({
        required_error: "Email obrigatório"
      }).email("Insira um email válido"),

      password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
})

export type SignInUserProps = z.infer<typeof SignInUserSchema>