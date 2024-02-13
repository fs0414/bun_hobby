// import { UserController } from "../controller/userController";
const { UserController } = require("../controller/userController");
const { UserUseCase } = require("../../../usecase/userUseCase");
const { UserReposiotry } = require("../../repository/userRepository");

const express = require("express");
const apiRouter = express.Router();

const repository = new UserReposiotry();
const usecase = new UserUseCase(repository)
const user = new UserController(usecase)

apiRouter.get("/users", user.all);
apiRouter.post("/signup", user.signin);

module.exports = apiRouter