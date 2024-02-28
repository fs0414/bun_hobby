import { extendType, nonNull } from "nexus";
import { PersonalBankAccount } from "../../types/personalBankAccount";
import { PersonalBankAccountUseCaseFactory } from "../../factory/personalBankAccount";

export const CreatePersonalBankAccountMutation = extendType({
    type: 'Mutation',
    definition(t) {
      t.nonNull.field('createPersonalBankAccount', {
        type: PersonalBankAccount,
        args: {
            account_number: nonNull('String'),
            balance: 'Int',
            is_active: 'Boolean',
            user_id: nonNull('Int'),
        },
        resolve: async (_parent, {
            account_number, user_id
        }) => {
            const usecase = PersonalBankAccountUseCaseFactory.createPersonalBankAccountUseCase();
            return await usecase.create(
                account_number, user_id
            );
        },
      });
    },
});