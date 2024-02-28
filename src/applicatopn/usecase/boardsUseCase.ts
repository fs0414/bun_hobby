import type { BoardsRepositoryInterface } from "../../infrastructure/repository/interface/boardsRepositoryIf";
import type { BoardUseCaseInterface } from "./interface/boardsUseCaseIf";
import type { Board } from "@prisma/client";

export class BoardUseCase implements BoardUseCaseInterface {
    private boardsRepository: BoardsRepositoryInterface;

    constructor(boardsRepository: BoardsRepositoryInterface) {
        this.boardsRepository = boardsRepository;
    }

    all = async(): Promise<Board[]> => {
        return await this.boardsRepository.all()
    }

    find = async(id: number): Promise<Board> => {
        const board = await this.boardsRepository.find(id)
        return board
    }

    create = async(content: string, userId:number): Promise<Board> => {
        return await this.boardsRepository.create(content, userId)
    }

    update = async(id: number, content: string): Promise<Board> => {
        return await this.boardsRepository.update(id, content)
    }
}