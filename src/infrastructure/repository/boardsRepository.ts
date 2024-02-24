import type { Board } from "@prisma/client";
import { prismaContext } from "../database/prismaContext";
import type { BoardsRepositoryInterface } from "./interface/boardsRepositoryIf";
import { redisClient } from "../redis/redisClient";

export class BoardRepository implements BoardsRepositoryInterface {
    all = async(): Promise<Board[] | undefined> => {
        return await prismaContext.board.findMany()
    }
    
    find = async(id: number): Promise<Board | null> => {
        const cacheKey = `board:${id}`
        const cacheRecode = await redisClient.get(cacheKey)

        if (cacheRecode) {
            console.log('board find cache hit')
            return JSON.parse(cacheRecode)
        }

        const board = await prismaContext.board.findUnique({
            where: {
                id: id
            }
        })

        if (board) {
            console.log('board find cache add')
            await redisClient.set(cacheKey, JSON.stringify(board))
        }

        return board;
    }

    create = async(content: string, userId: number): Promise<Board> => {
        return await prismaContext.board.create({
            data: {
                content: content,
                user_id: userId,
            }
        })
    }

    update = async(id: number, content: string): Promise<Board | undefined> => {
        return await prismaContext.board.update({
            where: {
                id: id
            },
            data: {
                content: content
            }
        })
    }
}