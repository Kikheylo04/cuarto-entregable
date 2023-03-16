const { check, param } = require("express-validator");
const validateResult = require("../utils/validate");

const createValidator = [
  check("userId", "Error con el campo userId")
    .exists()
    .withMessage("El userId es obligatorio")
    .notEmpty()
    .withMessage("El userId no debe estar vacio")
    .isInt()
    .withMessage("El userId deber ser un entero"),
  check("conversationId", "Error con el conversationId")
  .exists()
  .withMessage("El conversationId es obligatorio")
  .notEmpty()
  .withMessage("El conversationId no debe estar vacio")
  .isInt()
  .withMessage("El conversationId deber ser un entero"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
]


module.exports = {
  createValidator,
};
