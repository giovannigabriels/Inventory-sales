const { Sales, Customer, Item } = require("../models");
class Controller {
  static async addSales(req, res, next) {
    try {
      const { id } = req.user;
      const user = await Customer.findOne({
        where: {
          id,
        },
      });
      const { item, qty } = req.body;
      let codeTransaction = (Math.random() + 1).toString(36).substring(7);
      let dateTransaction = new Date().toLocaleDateString("en-CA");
      const findItem = await Item.findOne({
        where: {
          nameItem: item,
        },
      });
      if (findItem.stock < qty) {
        throw { name: "not enough stock" };
      }
      let diskon = 0;
      if (user.discount) {
        if (user.typeDiscount === "persentase") {
          diskon = (findItem.price * user.discount) / 100;
        } else {
          diskon = user.discount;
        }
      }
      let totalPrice = qty * findItem.price;
      let totalDiscount = diskon * qty;
      let totalPay = totalPrice - totalDiscount;
      const data = await Sales.create({
        codeTransaction,
        dateTransaction,
        customer: user.name,
        item,
        qty,
        totalDiscount,
        totalPrice,
        totalPay,
      });
      await findItem.decrement("stock", { by: qty });
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
