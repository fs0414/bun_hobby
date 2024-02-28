import { objectType } from "nexus";

export const PersonalBankAccount = objectType({
    name: "PersonalBankAccount",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("account_number");
        t.nonNull.int("balance");
        t.nonNull.boolean("is_active");
        t.nonNull.int("user_id");
    },
});