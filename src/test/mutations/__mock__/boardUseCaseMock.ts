export const boardUseCaseMock = {
    createBoard: jest.fn().mockImplementation(() => {
        return Promise.resolve({
            id: 1,
            content: "content",
            user_id: 1
        })
    }),
}