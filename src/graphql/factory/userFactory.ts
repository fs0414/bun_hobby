import { UserService } from "../../applicatopn/service/userService";
import { UserUseCase } from "../../applicatopn/usecase/userUseCase";
import { UserRepository } from "../../infrastructure/repository/userRepository";

export class UserUseCaseFactory {
    static createUserUseCase(): UserUseCase {
        return new UserUseCase(
            new UserRepository(),
            new UserService()
        );
    }
}