import {z} from "zod"

const CreateUserSchema = z.object({
    name: z.string({required_error: "Name is required"})
    .min(3, {message: "Name must have at least three characters"}),

    email: z.string({required_error: "Email is required"}).email("Invalid email"),

    password: z.string({required_error: "Password is required"})
    .min(6,{ message: "Password must have at least six characters"})

})
type CreateUserDto = z.infer<typeof CreateUserSchema>;

export {CreateUserSchema, CreateUserDto};