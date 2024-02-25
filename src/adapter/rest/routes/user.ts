const { UserController } = require("../controller/userController");
const { UserUseCase } = require("../../../applicatopn/usecase/userUseCase")
const { UserRepository } = require("../../../infrastructure/repository/userRepository");

const express = require("express");
const apiRouter = express.Router();

const user = new UserController(
    new UserUseCase(
        new UserRepository()
    )
)

apiRouter.get("/users", user.all);
apiRouter.post("/signup", user.signup);

module.exports = apiRouter