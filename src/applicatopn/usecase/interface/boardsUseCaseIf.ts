import type { Board } from "@prisma/client";

export interface BoardUseCaseInterface {
    all(): Promise<Board[]>;
    
    find(id: number): Promise<Board>;

    create(content: string, userId:number): Promise<Board>;

    update(id: number, content: string): Promise<Board>;
}