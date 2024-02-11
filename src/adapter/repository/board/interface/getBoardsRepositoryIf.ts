import type { Board } from "@prisma/client";

export interface GetBoardsRepositoryInterface {
    run(): Promise<any>;
}