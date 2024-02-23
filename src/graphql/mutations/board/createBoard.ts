import { extendType } from "nexus";
import { Board } from "../../types/board";
import { BoardUseCaseFactory } from "../../factory/boardFactory";

export const CreateBoardMutation = extendType({
    type: 'Mutation',
    definition(t) {
      t.nonNull.field('createBoard', {
        type: Board,
        args: {
          content: 'String',
          user_id: 'Int'
        },
        resolve: async (_parent, { content, user_id }) => {
          const usecase = BoardUseCaseFactory.createBoardUseCase();
          const board = await usecase.create(content, user_id);
          return board;
        },
      });
    },
  });