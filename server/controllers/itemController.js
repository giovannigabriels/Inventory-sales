const { Item } = require("../models");
class Controller {
  static async getAllItem(req, res, next) {
    try {
      const data = await Item.findAll();
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = Controller;
