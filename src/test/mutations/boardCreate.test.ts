import { boardUseCaseMock } from "./__mock__/boardUseCaseMock";

jest.mock("../../graphql/factory/boardFactory", () => {
    createBoardUseCase: boardUseCaseMock
});

describe("createBoard", () => {
    it("should create a board and return it", async() => {
    })
});