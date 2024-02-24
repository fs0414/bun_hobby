import type { Board } from "@prisma/client";

export interface BoardUseCaseInterface {
    all(): Promise<Board[] | undefined>;
    
    find(id: number): Promise<Board | null>;

    create(content: string, userId:number): Promise<Board | undefined>;

    update(id: number, content: string): Promise<Board | undefined>;
}