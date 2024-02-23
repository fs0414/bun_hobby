import type { User } from "@prisma/client";

export interface UserRepositoryInterface {
    create(name: string, email: string, password: string): Promise<User | undefined>

    find(email: string, password: string): Promise<User | null>
}