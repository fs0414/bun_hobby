import { extendType } from "nexus";
import { BoardUseCaseFactory } from "../../factory/boardFactory";
import { Board } from "../../types/board";

export const GetBoardsQuery = extendType({
    type: 'Query',
    definition(t) {
      t.nonNull.list.field('boards', {
        type: Board,
        resolve: async () => {
            const usecase = BoardUseCaseFactory.createBoardUseCase();
            const boards = await usecase.all();
            return boards || [];
        },
      });
    },
});