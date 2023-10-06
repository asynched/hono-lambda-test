import { Context } from 'hono'
import { HTTPException } from 'hono/http-exception'
import {
  UserReadRepository,
  UserWriteRepository,
} from '@/domain/repository/user.repository'
import { createUserSchema } from '@/presenters/http/user/schemas/create-user.schema'

export class UserController {
  constructor(
    private readonly writeRepository: UserWriteRepository,
    private readonly readRepository: UserReadRepository,
  ) {}

  async findAll(ctx: Context) {
    const users = await this.readRepository.findAll()

    return ctx.json(users)
  }

  async findById(ctx: Context) {
    const id = ctx.get('id')

    const user = await this.readRepository.findById(parseInt(id))

    if (!user) {
      throw new HTTPException(404, {
        message: 'User was not found',
      })
    }

    return ctx.json(user)
  }

  async save(ctx: Context) {
    const rawData = ctx.req.json()

    const result = createUserSchema.safeParse(rawData)

    if (!result.success) {
      throw new HTTPException(400, result.error)
    }

    const user = await this.writeRepository.save(result.data)

    return ctx.json(user, {
      status: 201,
    })
  }

  async update(ctx: Context) {
    const id = ctx.get('id')

    const rawData = ctx.req.json()

    const result = createUserSchema.safeParse(rawData)

    if (!result.success) {
      throw new HTTPException(400, result.error)
    }

    const user = await this.writeRepository.update(parseInt(id), result.data)

    return ctx.json(user)
  }

  async delete(ctx: Context) {
    const id = ctx.get('id')

    await this.writeRepository.delete(parseInt(id))

    return ctx.json({ message: 'User deleted' })
  }
}
