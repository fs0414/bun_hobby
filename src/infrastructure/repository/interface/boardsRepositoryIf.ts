import type { Board } from "@prisma/client";

export interface BoardsRepositoryInterface {
    all(): Promise<Board[] | undefined>;

    create(content: string, userId: number): Promise<Board | undefined>;
}