const express = require("express")
const apiRouter = express.Router();

apiRouter.get("/boards", () => {
    console.log("route api /api/boards")
});

module.exports = apiRouter;