const express = require("express");
const apiRouter = express.Router();
const { BoardController } = require("../controller/boardController")
const { BoardUseCase } = require("../../../usecase/boardsUseCase")
const { BoardRepository } = require("../../repository/boardsRepository")

const board = new BoardController(
    new BoardUseCase(
        new BoardRepository()
    )
)

apiRouter.get("/boards", board.getBoards);
apiRouter.post("/boards", board.createBoard);

module.exports = apiRouter;