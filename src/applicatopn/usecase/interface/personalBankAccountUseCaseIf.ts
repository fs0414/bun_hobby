import type { PersonalBankAccount } from "@prisma/client";

export interface PersonalBankAccountUseCaseInterface {
    create(
        account_number: string,
        user_id: number
    ): Promise<PersonalBankAccount>
}