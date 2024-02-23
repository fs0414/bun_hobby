import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import type { UserServiceInterface } from "./interface/userSerivceIf";

dotenv.config()

export class UserService implements UserServiceInterface {
    publishToken = async(email: string): Promise<string> => {
        const token = jwt.sign(
            { email: email },
            process.env.JWT_SECRET || "",
            { expiresIn: "1h" }
        )
        
        return token
    }
}