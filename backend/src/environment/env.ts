import { z } from "zod";
import * as dotenv from "dotenv";

dotenv.config();

const envSchema = z.object({
  APP_PORT: z.string(),
  TOKEN_SECRET: z.string(),
  TOKEN_EXPIRATION: z.string(),

})

export const env = envSchema.parse(process.env);