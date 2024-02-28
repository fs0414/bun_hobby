import type { PersonalBankAccount } from '@prisma/client';
import type { PersonalBankAccountUseCaseInterface } from './interface/personalBankAccountUseCaseIf';
import type { PersonalBankAccountRepositoryInterface } from '../repository/interface/personalBankAccountRepositoryIf';

export class PersonalBankAccountUseCase implements PersonalBankAccountUseCaseInterface {
    constructor(private personalBankAccountRepository: PersonalBankAccountRepositoryInterface) {
        this.personalBankAccountRepository = personalBankAccountRepository;
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
        amount: number
    ): Promise<PersonalBankAccount> {
        return await this.personalBankAccountRepository.addPayrollToUser(
            user_id,
            amount
        );
    }
}