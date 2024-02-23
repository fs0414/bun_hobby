import { BoardUseCase } from "../../applicatopn/usecase/boardsUseCase";
import { BoardRepository } from "../../infrastructure/repository/boardsRepository";

export class BoardUseCaseFactory {
    static createBoardUseCase() {
        return new BoardUseCase(
            new BoardRepository()
        );
    }
}