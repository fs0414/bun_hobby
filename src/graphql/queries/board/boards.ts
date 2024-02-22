import { extendType } from "nexus";
import { Board } from "../../types";
import { prismaContext } from "../../../infrastructure/database/prismaContext";

export const BoardQuery = extendType({
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