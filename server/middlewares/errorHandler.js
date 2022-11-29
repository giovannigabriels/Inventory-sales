const errorHandler = (error, req, res, next) => {
  let code = 500;
  let message = `Internal server error`;

  if (
    error.name == "SequelizeValidationError" ||
    error.name == "SequelizeUniqueConstraintError"
  ) {
    error = error.errors[0].message;
    code = 400;
    message = error;
  } else if (error.name == "not enough stock") {
    code = 404;
    message = `not enough stock`;
  } else if (error.name == `invalid_credentials`) {
    code = 401;
    message = `invalid email or password`;
  } else if (
    error.name == `invalid token` ||
    error.name == `JsonWebTokenError`
  ) {
    code = 401;
    message = `invalid token`;
  }
  res.status(code).json({ message });
};

module.exports = errorHandler;
