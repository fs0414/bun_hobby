import type { User } from "@prisma/client";
import type { UserRepositoryInterface } from "./interface/userRepositoryIf";
import { prismaContext } from "../../infrastructure/database/prismaContext";

export class UserReposiotry implements UserRepositoryInterface {
    create = async(name: string, email: string, password: string): Promise<User | undefined> => {
        return await prismaContext.user.create({
            data: {
                name: name,
                email: email,
                password: password
            }
        })
    }
}