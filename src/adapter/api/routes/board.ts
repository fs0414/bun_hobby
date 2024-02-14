const express = require("express");
const apiRouter = express.Router();
const { BoardController } = require("../controller/boardController")
const { BoardUseCase } = require("../../../usecase/boardsUseCase")
const { BoardRepository } = require("../../repository/boardsRepository")

const repository = new BoardRepository()
const usecase = new BoardUseCase(repository)
const board = new BoardController(usecase);

apiRouter.get("/boards", board.getBoards);
apiRouter.post("/boards", board.createBoard);

module.exports = apiRouter;