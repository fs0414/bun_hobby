import type { Board } from "@prisma/client";
import { prismaContext } from "../../infrastructure/database/prismaContext";
import type { BoardsRepositoryInterface } from "./interface/boardsRepositoryIf";

export class BoardRepository implements BoardsRepositoryInterface {
    all = async(): Promise<Board[] | undefined> => {
        try {
            console.log('repositoru')
            return await prismaContext.board.findMany()
        } catch (err: any) {
            console.log('err', err.message)
        }
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