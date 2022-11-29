const express = require("express");
const Controller = require("../controllers/salesController");
const router = express.Router();

router.post("/", Controller.addSales);

module.exports = router;
