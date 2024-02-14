import { type Request, type Response } from "express";
import type { BoardUseCaseInterface } from "../../../usecase/interface/boardsUseCaseIf";

export class BoardController {
    private boardsUseCase: BoardUseCaseInterface;

    constructor(boardsUseCase: BoardUseCaseInterface) {
        this.boardsUseCase = boardsUseCase
    }

    getBoards = async(_req: Request, res: Response) => {
        const boards = await this.boardsUseCase.all();
        res.status(200).json(boards);
    }

    createBoard = async(req: Request, res: Response) => {
        try {
            const { content, userId } = req.body;
            const board = await this.boardsUseCase.create(content, userId);
            res.status(201).json(board);
        } catch(err: any) {
            console.log('err', err.message)
        }
        
    }
}