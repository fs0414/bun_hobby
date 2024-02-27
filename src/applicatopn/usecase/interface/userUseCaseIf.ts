import type { User } from "@prisma/client";

export interface UserUseCaseInterface {
    signup(name: string, email: string, password: string, role: string): Promise<User | undefined>

    signin(email: string, password: string): Promise<string | undefined>
}