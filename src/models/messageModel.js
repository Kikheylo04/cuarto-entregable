const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Message = db.define("messages", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  userConversationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_conversation_id",
  },
});

module.exports = Message;
