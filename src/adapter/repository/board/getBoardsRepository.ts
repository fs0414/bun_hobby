import type { Board } from "@prisma/client";
import { prismaContext } from "../../../infrastructure/database/prismaContext";
import type { GetBoardsRepositoryInterface } from "./interface/getBoardsRepositoryIf";

export class GetBoardRepository implements GetBoardsRepositoryInterface {
    run = async(): Promise<any> => {
        // console.log("board repository")
        try {
            return await prismaContext.board.findMany()
        } catch (err: any) {
            console.log('err', err.message)
        }
    }
}