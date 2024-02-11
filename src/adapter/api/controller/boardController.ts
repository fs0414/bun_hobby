import { type Request, type Response } from "express";
import type { GetBoardUseCaseInterface } from "../../../usecase/board/interface/getBoardsUseCaseIf";
import { GetBoardUseCase } from "../../../usecase/board/getBoardsUseCase";
import { GetBoardRepository } from "../../repository/board/getBoardsRepository";

export class BoardController {
    // private getBoardsUseCase: GetBoardUseCaseInterface;

    // constructor(getBoardsUseCase: GetBoardUseCaseInterface) {
    //     this.getBoardsUseCase = getBoardsUseCase
    // }

    getBoards = async(_req: Request, _res: Response) => {
        const repository = new GetBoardRepository()
        return new GetBoardUseCase(repository).run()
        // return await this.getBoardsUseCase.run()
    }
}