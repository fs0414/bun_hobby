import type { User } from "@prisma/client";

export interface UserUseCaseInterface {
    create(name: string, email: string, password: string): Promise<User | undefined>
}