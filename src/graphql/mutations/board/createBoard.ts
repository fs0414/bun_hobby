import { extendType } from "nexus";
import { Board } from "../../types/board";
import { prismaContext } from "../../../infrastructure/database/prismaContext";

export const CreateBoardMutation = extendType({
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