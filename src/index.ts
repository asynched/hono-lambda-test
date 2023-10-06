import { handle } from 'hono/aws-lambda'
import { app } from '@/main'

export const handler = handle(app)
