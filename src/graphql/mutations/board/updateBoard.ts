import { extendType } from "nexus";
import { BoardUseCaseFactory } from "../../factory/boardFactory";
import { Board } from "../../types/board";

export const UpdateBoardMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("updateBoard", {
            type: Board,
            args: {
                id: "Int",
                content: "String",
                user_id: "Int"
            },
            resolve: async (_parent, { id, content }, _context) => {
                const usecase = BoardUseCaseFactory.createBoardUseCase();
                const board = await usecase.update(id, content);
                return board;
            }
        })
    },
})