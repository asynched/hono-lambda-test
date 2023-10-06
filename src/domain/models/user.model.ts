export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  password: string
  banned: boolean
  verified: boolean
  createdAt: Date
  updatedAt: Date
}
