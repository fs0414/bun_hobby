import { extendType, intArg, nonNull } from "nexus";
import { BoardUseCaseFactory } from "../../factory/boardFactory";
import { Board } from "../../types/board";

export const UpdateBoardMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("updateBoard", {
            type: Board,
            args: {
                id: nonNull(intArg()),
                content: nonNull("String"),
            },
            resolve: async (_parent, { id, content }, _context) => {
                const usecase = BoardUseCaseFactory.createBoardUseCase();
                const board = await usecase.update(id, content);
                return board;
            }
        })
    },
})