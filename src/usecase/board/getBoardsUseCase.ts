import type { GetBoardsRepositoryInterface } from "../../adapter/repository/board/interface/getBoardsRepositoryIf";
import type { GetBoardUseCaseInterface } from "./interface/getBoardsUseCaseIf";

export class GetBoardUseCase implements GetBoardUseCaseInterface {
    private getBoardsRepository: GetBoardsRepositoryInterface;

    constructor(getBoardsRepository: GetBoardsRepositoryInterface) {
        this.getBoardsRepository = getBoardsRepository;
    }

    // async run(): Promise<void> {
    run = async(): Promise<any> => {
        return await this.getBoardsRepository.run()
    }
}