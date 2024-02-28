import { PersonalBankAccountUseCase } from "../../applicatopn/usecase/personalBankAccountUseCase";
import { PersonalBankAccountRepository } from "../../infrastructure/repository/personalBankAccountRepository";

export class PersonalBankAccountUseCaseFactory {
    static createPersonalBankAccountUseCase() {
        return new PersonalBankAccountUseCase(
            new PersonalBankAccountRepository()
        );
    }
}