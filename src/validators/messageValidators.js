const { check, param } = require("express-validator");
const validateResult = require("../utils/validate");

const createValidator = [
  check("content", "Error con el campo content")
    .exists()
    .withMessage("El content es obligatorio")
    .notEmpty()
    .withMessage("El content no debe estar vacio")
    .isString()
    .withMessage("El content debe ser un string"),
  check("userConversationId", "Error con el userConversationId")
  .exists()
  .withMessage("El userConversationId es obligatorio")
  .notEmpty()
  .withMessage("El userConversationId no debe estar vacio")
  .isInt()
  .withMessage("El userConversationId deber ser un entero"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
]


module.exports = {
  createValidator,
};
