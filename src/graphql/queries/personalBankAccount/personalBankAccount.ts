import { extendType, nonNull } from "nexus";
import { PersonalBankAccount } from "../../types/personalBankAccount";
import { prismaContext } from "../../../infrastructure/database/prismaContext";

export const GetPersonalBankAccountQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.field('personalBankAccount', {
            type: PersonalBankAccount,
            args: {
                id: nonNull('Int'),
                user_id: nonNull('Int')
            },
            resolve: async (_parent, { id, user_id }, _) => {
                console.log("id", id)
                console.log("user_id", user_id)
                return await prismaContext.personalBankAccount.findUnique({
                    where: {
                        id: id,
                        user_id: user_id
                    }
                });
            }
        })
    }
})