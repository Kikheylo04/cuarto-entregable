const { Sequelize } = require("sequelize");
const dataBase = new Sequelize(
  "postgres://postgres:secretsecret@localhost:5432/cuarto_entregbale"
);

module.exports = dataBase;
