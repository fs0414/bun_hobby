import type { BoardsRepositoryInterface } from "../../infrastructure/repository/interface/boardsRepositoryIf";
import type { BoardUseCaseInterface } from "./interface/boardsUseCaseIf";
import type { Board } from "@prisma/client";

export class BoardUseCase implements BoardUseCaseInterface {
    private boardsRepository: BoardsRepositoryInterface;

    constructor(boardsRepository: BoardsRepositoryInterface) {
        this.boardsRepository = boardsRepository;
    }

    all = async(): Promise<Board[] | undefined> => {
        return await this.boardsRepository.all()
    }

    create = async(content: string, userId:number): Promise<Board | undefined> => {
        return await this.boardsRepository.create(content, userId)
    }
}