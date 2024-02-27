import type { Role, User } from "@prisma/client";

export interface UserRepositoryInterface {
    create(name: string, email: string, password: string, role: Role): Promise<User>

    find(email: string, password: string): Promise<User>
}