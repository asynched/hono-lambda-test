import type { Config } from 'drizzle-kit'
import { env } from '@/config/env'

const config: Config = {
  driver: 'turso',
  dbCredentials: {
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN,
  },
  schema: 'src/drizzle/schema',
  out: 'drizzle',
}

export default config
