import { Prisma } from '@prisma/client'

export type UsersInput = Prisma.UsersCreateInput
export type UsersPayload = Prisma.UsersCreateInput

export interface IUsersRepository {
    create: (userData: UsersInput) => Promise<UsersPayload>
    update: (id: string, userData: UsersInput) => Promise<UsersPayload>
    findByEmail: (email: string) => Promise<UsersPayload>
    findById: (id: string) => Promise<UsersPayload>
    delete: (id: string) => Promise<void>
}