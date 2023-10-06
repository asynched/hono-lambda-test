import { Hono } from 'hono'
import { UserController } from '@/presenters/http/user/controller'
import {
  DrizzleUserReadRepository,
  DrizzleUserWriteRepository,
} from '@/infra/persistence/repositories/drizzle-user.repository'
import { StatusController } from '@/presenters/http/status/controller'

export const app = new Hono()

const userWriteRepository = new DrizzleUserWriteRepository()
const userReadRepository = new DrizzleUserReadRepository()
const userController = new UserController(
  userWriteRepository,
  userReadRepository,
)

const statusController = new StatusController()

app.get('/status', (ctx) => statusController.getStatus(ctx))

app.post('/users', (ctx) => userController.save(ctx))
app.put('/users/:id', (ctx) => userController.update(ctx))
app.delete('/users/:id', (ctx) => userController.delete(ctx))
app.get('/users', (ctx) => userController.findAll(ctx))
app.get('/users/:id', (ctx) => userController.findById(ctx))
