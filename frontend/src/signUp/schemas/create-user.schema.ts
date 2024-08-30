import { z } from "zod"

export const CreateUserSchema = z.object({

})

export type CreateUserProps = z.infer<typeof CreateUserSchema>