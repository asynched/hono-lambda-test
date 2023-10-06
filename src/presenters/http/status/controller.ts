import { Context } from 'hono'

export class StatusController {
  getStatus(ctx: Context) {
    return ctx.json({ status: 'up' })
  }
}
