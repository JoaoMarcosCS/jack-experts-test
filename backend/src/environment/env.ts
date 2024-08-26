import {z} from "zod"

const envSchema = z.object({
    TESTE: z.string({message:"erro"}),
});

export const env = envSchema.parse(process.env);
