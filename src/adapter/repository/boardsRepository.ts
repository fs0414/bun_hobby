import type { Board } from "@prisma/client";
import { prismaContext } from "../../infrastructure/database/prismaContext";
import type { BoardsRepositoryInterface } from "./interface/boardsRepositoryIf";

export class BoardRepository implements BoardsRepositoryInterface {
    all = async(): Promise<Board[] | undefined> => {
        return await prismaContext.board.findMany()
    }

    create = async(content: string, userId: number): Promise<Board> => {
        return await prismaContext.board.create({
            data: {
                content: content,
                user_id: userId,
            }
        })
    }
}