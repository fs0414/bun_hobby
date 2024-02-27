// import { describe, it, expect, mock, jest } from "bun:test"

import { BoardUseCase } from "../../../../applicatopn/usecase/boardsUseCase";
import type { BoardsRepositoryInterface } from "../../../../infrastructure/repository/interface/boardsRepositoryIf";

const mockBoard = {
    id: 1,
    user_id: 1,
    content: "content",
}

const mockBoardsRepository = {
    find: jest.fn().mockResolvedValue({
      id: 1,
      content: 'Test Board',
      userId: 1,
    }),
  } as Partial<BoardsRepositoryInterface> as BoardsRepositoryInterface;

const boardUseCase = new BoardUseCase(mockBoardsRepository)

describe("Find Board", () => {
    it("should find a board and return it", async() => {
        const result = await boardUseCase.find(1)

        console.log("console", result)
        expect(result).toEqual({
            id: 1,
            content: 'Test Board',
            userId: 1,
          })
    });
});