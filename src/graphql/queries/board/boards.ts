import { extendType } from "nexus";
import { Board } from "../../types/board";
import { prismaContext } from "../../../infrastructure/database/prismaContext";

export const GetBoardsQuery = extendType({
    type: 'Query',
    definition(t) {
      t.nonNull.list.field('boards', {
        type: Board,
        resolve: async () => {
          return await prismaContext.board.findMany();
        },
      });
    },
});