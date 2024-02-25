import { extendType, intArg, nonNull } from "nexus";
import { Board } from "../../types/board";
import { BoardUseCaseFactory } from "../../factory/boardFactory";

export const GetBoardQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.field("board", {
        type: Board,
        args: {
            id: nonNull(intArg()),
        },
        resolve: async (_, { id }) => {
                const usecase = BoardUseCaseFactory.createBoardUseCase();
                const board = await usecase.find(id);
                return board;
        },
        });
    },
})