import type { PersonalBankAccount } from "@prisma/client";

export interface PersonalBankAccountServiceInterface {
    addPayrollReport: (
        payrollToUser: PersonalBankAccount,
        amount: number,
        adminUserId: number
    ) => Promise<void>;
}