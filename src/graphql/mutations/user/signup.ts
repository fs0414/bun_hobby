import { extendType } from "nexus";
import { prismaContext } from "../../../infrastructure/database/prismaContext";
import { User } from "../../types/user";
import { UserUseCaseFactory } from "../../factory/userFactory";

export const SignupMutation = extendType({
    type: 'Mutation',
    definition(t) {
      t.nonNull.field('signup', {
        type: User,
        args: {
          name: 'String',
          email: 'String',
          password: 'String'
        },
        resolve: async (_parent, { name, email, password }) => {
            try {
                const usecase = UserUseCaseFactory.createUserUseCase()
                const user = await usecase.signup(name, email, password)
                return user
            } catch (error: ErrnoException | any) {
                throw new Error(error.message)
            }
        },
      });
    }
})