import { test, expect, jest } from "bun:test";
import type { BoardUseCaseInterface } from "../../../applicatopn/usecase/interface/boardsUseCaseIf";

export const mockBoardUseCase : BoardUseCaseInterface = {
    all: jest.fn().mockResolvedValue(
        [
            { 
                id: 1,
                user_id: 1,
                content: 'TestContent01',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 2,
                user_id: 1,
                content: 'TestContent02',
                created_at: new Date(),
                updated_at: new Date() 
            }
        ]
    ),

    create: jest.fn().mockResolvedValue(
        { 
            id: 1,
            user_id: 1,
            content: 'TestContent01',
            created_at: new Date(),
            updated_at: new Date()
        }
    )
}