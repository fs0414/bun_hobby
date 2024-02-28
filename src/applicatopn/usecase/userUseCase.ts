import type { Role, User } from "@prisma/client";
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

    find = async(id: number): Promise<User> => {
        return await this.userRepository.findById(id)
    }

    signup = async(
        name: string,
        email: string,
        password: string,
        role: Role): Promise<User> => 
    {
        return await this.userRepository.create(name, email, password, role)
    }

    signin = async(email: string, password: string): Promise<string | undefined> => {
        try {
            const fetchUser = await this.userRepository.findByCredential(email, password)
    
            const token = await this.userService.publishToken(fetchUser.email)

            return token
        } catch (error: unknown) {
            throw error
        }
    }
}