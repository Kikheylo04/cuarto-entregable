const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const Type = {
  COUPLE: "conversación en pareja",
  GROUP: "conversación grupal",
};

const Conversation = db.define("conversations", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM(Object.values(Type)),
    defaultValue: Type.COUPLE,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
  },
});

module.exports = Conversation;
