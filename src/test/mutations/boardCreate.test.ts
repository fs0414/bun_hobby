import { describe, it, expect, jest, mock } from "bun:test"
// import { boardUseCaseMock } from "./__mock__/boardUseCaseMock";

const mockCreate = jest.fn().mockResolvedValue({
    id: 1,
    content: 'Test content',
    userId: 1
});

const mockBoardUseCase = jest.fn().mockReturnValue({
    create: mockCreate
});

describe("createBoard", () => {
    it("should create a board and return it", async() => {
        // const usecase = createBoardUseCaseMock();

        // const result = await usecase.create('Test content', 1);

        // expect(result.id).toBe(1);
        // expect(result.content).toBe('Test content');
        // expect(result.userId).toBe(1);
    })
});