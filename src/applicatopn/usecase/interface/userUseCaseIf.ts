import type { Role, User } from "@prisma/client";

export interface UserUseCaseInterface {
    find(id: number): Promise<User>

    signup(name: string, email: string, password: string, role: Role): Promise<User | undefined>

    signin(email: string, password: string): Promise<string | undefined>
}