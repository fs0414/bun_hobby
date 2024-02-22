import { objectType, extendType } from "nexus";
import { prismaContext } from "../../infrastructure/database/prismaContext";

export const Board = objectType({
    name: "Board",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("content");
        t.nonNull.int("user_id")
    },
})

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

export const BoardMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createBoard', {
      type: Board,
      args: {
        content: 'String',
        user_id: 'Int'
      },
      resolve: async (_parent, args) => {
        return await prismaContext.board.create({
          data: {
            content: args.content,
            user_id: args.user_id
          }
        });
      },
    });
  },
});