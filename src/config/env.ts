import 'dotenv/config'
import { object, string } from 'zod'

const envSchema = object({
  DATABASE_URL: string().url(),
  DATABASE_AUTH_TOKEN: string(),
})

export const env = envSchema.parse(process.env)
