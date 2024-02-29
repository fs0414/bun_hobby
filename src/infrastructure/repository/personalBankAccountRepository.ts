import type { PersonalBankAccount, Prisma } from "@prisma/client";
import { prismaContext } from "../database/prismaContext";
import type { PersonalBankAccountRepositoryInterface } from "./interface/personalBankAccountRepositoryIf";

export class PersonalBankAccountRepository implements PersonalBankAccountRepositoryInterface {
    
    async create(
        account_number: string,
        user_id: number    
    ): Promise<PersonalBankAccount> {
        return await prismaContext.personalBankAccount.create({
            data: {
                account_number: account_number,
                user_id: user_id
            },
        });
    }

    async addPayrollToUser(
        user_id: number,
        amount: number,
        tx: Prisma.TransactionClient
    ): Promise<PersonalBankAccount> {
        return await tx.personalBankAccount.update({
            where: {
                user_id: user_id
            },
            data: {
                balance: {
                    increment: amount
                }
            }
        });
    }

}