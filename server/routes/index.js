const express = require("express");
const authentication = require("../middlewares/aunthentication");
const router = express.Router();
const customerRouter = require("./customerRouter");
const itemsRouter = require("./itemsRouter");
const salesRouter = require("./salesRouter");
router.use("/customer", customerRouter);
router.use("/items", itemsRouter);

router.use(authentication);
router.use("/sales", salesRouter);

module.exports = router;
