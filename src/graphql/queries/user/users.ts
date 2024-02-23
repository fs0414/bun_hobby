import { extendType } from "nexus";
import { User } from "../../types/user";
import { prismaContext } from "../../../infrastructure/database/prismaContext";

export const GetUsersQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.field('users', {
            type: User,
            resolve: async (_parent, _args, _context) => {
                return await prismaContext.user.findMany();
            }
        })
    },
})  