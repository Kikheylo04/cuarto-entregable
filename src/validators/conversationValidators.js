const { check, param } = require("express-validator");
const validateResult = require("../utils/validate");

const createValidator = [
  check("title", "Error con el campo title")
    .exists()
    .withMessage("El title es obligatorio")
    .notEmpty()
    .withMessage("El title no debe estar vacio")
    .isString()
    .withMessage("El title debe ser un string")
    .isLength({ min: 6, max: 50 })
    .withMessage("El title debe tener entre 6 y 50 caracteres"),
  check("type", "Error con el type")
    .exists()
    .withMessage("El type es obligatorio")
    .notEmpty()
    .withMessage("El type no debe ser vacio")
    .isString()
    .withMessage("El type debe ser un string"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
const deleteValidator = [
  param("id").isInt().withMessage("El id debe ser un entero"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  createValidator,
  deleteValidator,
};
