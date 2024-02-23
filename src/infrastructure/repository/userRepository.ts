import type { User } from "@prisma/client";
import type { UserRepositoryInterface } from "./interface/userRepositoryIf";
import { prismaContext } from "../database/prismaContext";

export class UserRepository implements UserRepositoryInterface {
    create = async(name: string, email: string, password: string): Promise<User | undefined> => {
        return await prismaContext.user.create({
            data: {
                name: name,
                email: email,
                password: password
            }
        })
    }

    find = async(email: string, password: string): Promise<User | null> => {
        return await prismaContext.user.findUnique({
            where: {
                email: email,
                password: password
            }
        })
    }
}