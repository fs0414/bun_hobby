import { PersonalBankAccountUseCase } from "../../applicatopn/usecase/personalBankAccountUseCase";
import { PersonalBankAccountRepository } from "../../infrastructure/repository/personalBankAccountRepository";
import { PersonalBankAccountService } from "../../applicatopn/service/personalBankAccount";

export class PersonalBankAccountUseCaseFactory {
    static createPersonalBankAccountUseCase() {
        return new PersonalBankAccountUseCase(
            new PersonalBankAccountRepository(),
            new PersonalBankAccountService()
        );
    }
}