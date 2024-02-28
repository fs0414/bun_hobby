import type { PersonalBankAccount } from "@prisma/client";

export interface PersonalBankAccountRepositoryInterface {
    create(
        account_number: string,
        user_id: number
    ): Promise<PersonalBankAccount>

    addPayrollToUser(
        user_id: number,
        amount: number
    ): Promise<PersonalBankAccount>
}