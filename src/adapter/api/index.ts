// import { app } from "../../index";
// import express from "express";
const express = require("express")

const router = express.Router();
// export const router = express.Router();

// router.use("/api", () => {
//     console.log("/api index.ts router")
// });
router.use("/api", require("./routes/board"));
module.exports = router;