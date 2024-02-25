const express = require("express");
const apiRouter = express.Router();
const { redisClient } = require("../../../infrastructure/redis/redisClient");
const { BoardController } = require("../controller/boardController")
const { BoardUseCase } = require("../../../applicatopn/usecase/boardsUseCase")
const { BoardRepository } = require("../../../infrastructure/repository/boardsRepository")

const board = new BoardController(
    new BoardUseCase(
        new BoardRepository()
    )
)

apiRouter.get("/boards", board.getBoards);
apiRouter.post("/boards", board.createBoard);

apiRouter.get("/board/cache_clear", async() => {
    const keys = await redisClient.keys('board:*');
    await Promise.all(keys.map((key: any) => 
        redisClient.del(key)
    ));
    console.log('board cache clear')
    return;
})

module.exports = apiRouter;