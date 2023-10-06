import { serve } from '@hono/node-server'
import { app } from '@/main'

serve(app, (addr) =>
  console.log(`Server listening on http://${addr.address}:${addr.port}`),
)
