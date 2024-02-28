import { extendType, intArg, nonNull } from "nexus";
import { UserUseCaseFactory } from "../../factory/userFactory";
import { User } from "../../types/user";

export const GetUserQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.field('user', {
            type: User,
            args: {
                id: nonNull(intArg()),
            },
            resolve: async (_parent, { id }, _context) => {
                console.log('user')
                const usecase = UserUseCaseFactory.createUserUseCase();
                return await usecase.find(id);
            }
        })
    }
})