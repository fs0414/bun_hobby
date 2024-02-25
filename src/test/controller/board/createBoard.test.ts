import type { Request, Response } from "express";
import { expect, jest, describe, it } from "bun:test";
import { BoardController } from "../../../adapter/rest/controller/boardController";
import { mockBoardUseCase } from "./boardUseCaseMock.test";

const mockReq: any = {
    body: {
        content: 'TestContent01',
        userId: 1
    }
}

const mockRes: any = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
};

describe('BoardController.createBoard', () => {
    it('正常系', async() => {
        const board = new BoardController(mockBoardUseCase);
        await board.createBoard(mockReq, mockRes);

        expect(mockBoardUseCase.create).toHaveBeenCalledWith('TestContent01', 1)
        expect(mockRes.status).toHaveBeenCalledWith(201);
        expect(mockRes.json).toHaveBeenCalledWith({
            id: 1,
            user_id: 1,
            content: 'TestContent01',
            created_at: expect.any(Date),
            updated_at: expect.any(Date)
        });

    })
})