import type { Role, User } from "@prisma/client";
import type { UserRepositoryInterface } from "./interface/userRepositoryIf";
import { prismaContext } from "../database/prismaContext";

export class UserRepository implements UserRepositoryInterface {
    findById = async(id: number): Promise<User> => {
        const user = await prismaContext.user.findUnique({
            where: {
                id: id
            },
            include: {
                boards: true
            }
        })
        
        if (!user) {
            throw new Error("not found user")
        }
        
        return user
    }

    create = async(
        name: string, 
        email: string, 
        password: string,
        role: Role
    ): Promise<User> => {
        return await prismaContext.user.create({
            data: {
                name: name,
                email: email,
                password: password,
                role: role
            }
        })
    }

    findByCredential = async(email: string, password: string): Promise<User> => {
        const user = await prismaContext.user.findUnique({
            where: {
                email: email,
                password: password
            }
        })
        
        if (!user) {
            throw new Error("not found user")
        }
        
        return user
    }
}