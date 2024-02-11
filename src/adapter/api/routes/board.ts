const express = require("express");
// import express from 'express';
const apiRouter = express.Router();
// import { BoardController } from "../../controller/boardController";
const { BoardController } = require("../controller/boardController")
// import { GetBoardUseCase } from "../../../usecase/board/getBaords/getBoardsUseCase";
// const { GetBoardRepository } = require("../../../infrastructure/repository/board/getBoards/getBoardsRepository")

// const getBoardRepository = new GetBoardRepository()
// const usecase = new GetBoardUseCase(getBoardRepository)
const board = new BoardController();

apiRouter.get("/boards", board.getBoards);

module.exports = apiRouter;