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
                const start = process.hrtime();
                const usecase = BoardUseCaseFactory.createBoardUseCase();
                const end = process.hrtime(start);
                console.log("Execution time (hr): %ds %dms", end[0], end[1] / 1000000);
                return await usecase.find(id);
            },
        });
    },
})