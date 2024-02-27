import { arg, extendType, nonNull } from "nexus";
import { Role, User } from "../../types/user";
import { UserUseCaseFactory } from "../../factory/userFactory";

export const SignupMutation = extendType({
    type: 'Mutation',
    definition(t) {
      t.nonNull.field('signup', {
        type: User,
        args: {
          name: nonNull('String'),
          email: nonNull('String'),
          password: nonNull('String'),
          role: nonNull(arg({ type: Role })),
        },
        resolve: async (_parent, { name, email, password, role }) => {
            try {
                const usecase = UserUseCaseFactory.createUserUseCase()
                return await usecase.signup(
                  name, email, password, role
                )
            } catch (error: ErrnoException | any) {
                throw new Error(error.message)
            }
        },
      });
    }
})