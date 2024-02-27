import { extendType, intArg, nonNull } from "nexus";
import { Board } from "../../types/board";
import { BoardUseCaseFactory } from "../../factory/boardFactory";

export const CreateBoardMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createBoard', {
      type: Board,
      args: {
        content: nonNull('String'),
        user_id: nonNull(intArg()),
      },
      resolve: async (_parent, { content, user_id }) => {
        const usecase = BoardUseCaseFactory.createBoardUseCase();
        const board = await usecase.create(content, user_id);
        return board;
      },
    });
  },
});