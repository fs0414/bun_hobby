import type { Board } from "@prisma/client";
import type { Request, Response } from "express";

export interface BoardUseCaseInterface {
    all(): Promise<Board[] | undefined>;
    
    create(content: string, userId:number): Promise<Board | undefined>;

    update(id: number, content: string): Promise<Board | undefined>;
}