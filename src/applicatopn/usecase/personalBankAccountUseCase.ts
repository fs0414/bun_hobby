import type { PersonalBankAccount } from '@prisma/client';
import type { PersonalBankAccountUseCaseInterface } from './interface/personalBankAccountUseCaseIf';
import type { PersonalBankAccountRepositoryInterface } from '../repository/interface/personalBankAccountRepositoryIf';
import type { PersonalBankAccountServiceInterface } from '../service/interface/personalBankAccount';
import { prismaContext } from '../../infrastructure/database/prismaContext';

export class PersonalBankAccountUseCase implements PersonalBankAccountUseCaseInterface {
    constructor(
        private personalBankAccountRepository: PersonalBankAccountRepositoryInterface,
        private personalBankAccuntService: PersonalBankAccountServiceInterface
    ) {
        this.personalBankAccountRepository = personalBankAccountRepository;
        this.personalBankAccuntService = personalBankAccuntService;
    }

    async create(
        account_number: string,
        user_id: number   
    ): Promise<PersonalBankAccount> {
        return await this.personalBankAccountRepository.create(
            account_number,
            user_id
        );
    }

    async addPayrollToUser(
        user_id: number,
        amount: number,
        adminUserId: number
    ): Promise<PersonalBankAccount> {
        return await prismaContext.$transaction(async(tx) => {
            const payrollToUser = await this.personalBankAccountRepository.addPayrollToUser(
                user_id,
                amount,
                tx
            );

            await this.personalBankAccuntService.addPayrollReport(payrollToUser, amount, adminUserId);

            return payrollToUser;
        })
    }
}