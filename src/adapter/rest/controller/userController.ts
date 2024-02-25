import type { Request, Response } from "express";
import type { UserUseCaseInterface } from "../../../applicatopn/usecase/interface/userUseCaseIf";
import { prismaContext } from "../../../infrastructure/database/prismaContext";

export class UserController {
    private userUseCase: UserUseCaseInterface;

    constructor(userUseCase: UserUseCaseInterface) {
        this.userUseCase = userUseCase;
    }

    all = async(_req: Response, res: Response) => {
        const users = await prismaContext.user.findMany()
        res.status(200).json(users);
    }

    signup = async(req: Request, res: Response) => {
        const { name, email, password } = req.body;
        const user = await this.userUseCase.signup(name, email, password)
        res.status(201).json(user);
    }
}