import type { Response } from "express";
import { expect, jest, describe, it } from "bun:test";
import { BoardController } from "../../../adapter/rest/controller/boardController";
import { mockBoardUseCase } from "./boardUseCaseMock.test";
import type { Board } from "@prisma/client";

const mockRes: any = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
};

describe('BoardController.getBoards', () => {
    it('正常系', async() => {
        const board = new BoardController(mockBoardUseCase);
        await board.getBoards({} as any, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith([
            { id: 1, user_id: 1, content: 'TestContent01', created_at: expect.any(Date), updated_at: expect.any(Date) },
            { id: 2, user_id: 1, content: 'TestContent02', created_at: expect.any(Date), updated_at: expect.any(Date) }
          ]);
    })
})