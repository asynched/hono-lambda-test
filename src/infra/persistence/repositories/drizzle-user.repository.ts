import { User } from '@/domain/models/user.model'
import {
  UserCreate,
  UserReadRepository,
  UserWriteRepository,
} from '@/domain/repository/user.repository'
import { client } from '@/drizzle/client'
import { users } from '@/drizzle/schema/user'
import { hash, genSalt } from 'bcryptjs'
import { eq } from 'drizzle-orm'

export class DrizzleUserWriteRepository implements UserWriteRepository {
  private readonly database = client

  async save(data: UserCreate): Promise<User> {
    const password = await hash(data.password, await genSalt(10))

    const rows = await this.database
      .insert(users)
      .values({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        password: password,
      })
      .returning()

    return rows[0]
  }

  async update(id: number, data: UserCreate): Promise<User> {
    const password = await hash(data.password, await genSalt(10))

    const rows = await this.database
      .update(users)
      .set({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        password: password,
      })
      .where(eq(users.id, id))
      .returning()

    return rows[0]
  }

  async delete(id: number): Promise<void> {
    await this.database.delete(users).where(eq(users.id, id))
  }
}

export class DrizzleUserReadRepository implements UserReadRepository {
  private readonly database = client

  async findAll(): Promise<User[]> {
    return await this.database.select().from(users)
  }

  async findById(id: number): Promise<User | null> {
    const rows = await this.database
      .select()
      .from(users)
      .where(eq(users.id, id))

    if (!rows[0]) {
      return null
    }

    return rows[0]
  }
}
