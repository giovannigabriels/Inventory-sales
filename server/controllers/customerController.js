const { compare } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { Customer } = require("../models");

class Controller {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await Customer.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        throw { name: `invalid_credentials` };
      }

      const passValid = compare(password, user.password);

      if (!passValid) {
        throw { name: `invalid_credentials` };
      }
      //sign
      const payload = {
        id: user.id,
      };
      const access_token = createToken(payload);
      res.status(200).json({ access_token });
    } catch (error) {
      console.log(error, "error");
      next(error);
    }
  }
}

module.exports = Controller;
