import type { Role, User } from "@prisma/client";

export interface UserRepositoryInterface {
    findById(id: number): Promise<User>

    create(name: string, email: string, password: string, role: Role): Promise<User>

    findByCredential(email: string, password: string): Promise<User>
}