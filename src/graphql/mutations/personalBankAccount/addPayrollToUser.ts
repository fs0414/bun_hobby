import { extendType, intArg, nonNull } from "nexus";
import { PersonalBankAccountUseCaseFactory } from "../../factory/personalBankAccount";
import { PersonalBankAccount } from "../../types/personalBankAccount";
import { authenticateAdminRole } from "../../../applicatopn/handler/middleware/authenticateAdminRole";

export const AddPayrollToUserMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("addPayrollToUser", {
            type: PersonalBankAccount,
            args: {
                user_id: nonNull(intArg()),
                amount: nonNull(intArg()),
            },
            resolve: async (_parent, { user_id, amount }, context) => {
                try {
                    authenticateAdminRole(context.body.user.role);
                    const usecase = PersonalBankAccountUseCaseFactory.createPersonalBankAccountUseCase();
                    const adminUserId = context.body.user.id;
                    const result = await usecase.addPayrollToUser(user_id, amount, adminUserId)
                        // .then(result => {
                        //     console.log("result", result)
                        //     return result;
                        // })
                    return result;
                } catch (error: unknown) {
                    throw new Error(error as string);
                }
            },
        });
    },
});