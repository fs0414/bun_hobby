import { extendType, nonNull, objectType, stringArg } from "nexus";
import { UserUseCaseFactory } from "../../factory/userFactory";
import { AuthPayload } from "../../types/user";

export const SignInMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("signin", {
            type: AuthPayload,
            args: {
                email: nonNull(stringArg()),
                password: nonNull(stringArg()),
            },
            resolve: async (_parent, { email, password }) => {
                try {
                    const usecase = UserUseCaseFactory.createUserUseCase();
                    const token = await usecase.signin(email, password);
                    if (!token) {
                        throw new Error("Invalid email or password");
                    }

                    return { token };
                } catch (error: any) {
                    throw new Error(error.message);
                }
            },
        });
    },
});