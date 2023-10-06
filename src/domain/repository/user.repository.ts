import { User } from '@/domain/models/user.model'

export interface UserCreate {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface UserUpdate {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface UserWriteRepository {
  save(data: UserCreate): Promise<User>
  update(id: number, data: UserUpdate): Promise<User>
  delete(id: number): Promise<void>
}

export interface UserReadRepository {
  findAll(): Promise<User[]>
  findById(id: number): Promise<User | null>
}
