const express = require("express");
const router = express.Router();
const Controller = require("../controllers/itemController");

router.get("/", Controller.getAllItem);

module.exports = router;
