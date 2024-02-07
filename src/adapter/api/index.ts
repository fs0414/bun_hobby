const express = require("express")
const router = express.Router();

router.use("/api", require("./routes/board"));

module.exports = router;