import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { prismaContext } from "../../../infrastructure/database/prismaContext";

dotenv.config()

export const authenticateTokenUnless = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    const operationName = req.body.query.split(" ")[1];

    if (operationName === "Signin" || operationName === "Signup") {
        next();
    }

    if (token == null) 
        return res.status(403).send({ message: 'No token provided.' });

    const decodedUser = jwt.verify(token, process.env.JWT_SECRET || "")

    if (!decodedUser) 
        return res.status(500).send({ message: 'Failed to authenticate token.' });


    const findUser = await prismaContext.user.findUnique({
        where: {
            email: decodedUser.email
        }
    });

    req.body.user = findUser;
    next();
    
  };