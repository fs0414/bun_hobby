import type { User } from "@prisma/client";
import type { UserUseCaseInterface } from "./interface/userUseCaseIf";
import type { UserRepositoryInterface } from "../adapter/repository/interface/userRepositoryIf";

export class UserUseCase implements UserUseCaseInterface {
    private userRepository: UserRepositoryInterface;

    constructor(userRepository: UserRepositoryInterface){
        this.userRepository = userRepository;
    }
    create = async(name: string, email: string, password: string): Promise<User | undefined> => {
        return await this.userRepository.create(name, email, password)
    }
}