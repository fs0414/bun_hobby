import type { User } from "@prisma/client";
import type { UserUseCaseInterface } from "./interface/userUseCaseIf";
import type { UserRepositoryInterface } from "../../infrastructure/repository/interface/userRepositoryIf";
import type { UserServiceInterface } from "../service/interface/userSerivceIf"
export class UserUseCase implements UserUseCaseInterface {
    private userRepository: UserRepositoryInterface;
    private userService: UserServiceInterface;

    constructor(
        userRepository: UserRepositoryInterface,
        userService: UserServiceInterface
    ){
        this.userRepository = userRepository;
        this.userService = userService;
    }
    signup = async(
        name: string,
        email: string,
        password: string,
        role: string): Promise<User | undefined> => {
        return await this.userRepository.create(name, email, password, role)
    }

    signin = async(email: string, password: string): Promise<string | undefined> => {
        const fetchUser = await this.userRepository.find(email, password)
        
        if (!fetchUser) return undefined

        const token = await this.userService.publishToken(fetchUser.email)
        return token
    }
}