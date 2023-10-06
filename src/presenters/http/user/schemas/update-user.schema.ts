import { object, string } from 'zod'

export const updateUserSchema = object({
  firstName: string().min(2).max(32),
  lastName: string().min(2).max(32),
  email: string().email(),
  password: string().min(8).max(32),
})
