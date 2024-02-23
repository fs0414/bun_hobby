import type { Board } from "@prisma/client";

export interface BoardsRepositoryInterface {
    all(): Promise<Board[] | undefined>;

    create(content: string, userId: number): Promise<Board | undefined>;

    update(id: number, content: string): Promise<Board | undefined>;
}