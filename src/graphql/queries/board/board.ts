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
            resolve: async (_, { id }, context) => {
                console.log("context", context.body.user);
                const usecase = BoardUseCaseFactory.createBoardUseCase();
                return await usecase.find(id);
            },
        });
    },
})