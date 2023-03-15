const User = require("./userModel");
const Conversation = require("./conversationModel");
const Message = require("./messageModel");

const initModel = () => {
  User.hasMany(Conversation, { foreignKey: "userId" });
  Conversation.belongsTo(User, { foreignKey: "userId" });

  User.hasMany(Message, { foreignKey: "userId" });
  Message.belongsTo(User, { foreignKey: "userId" });

  Conversation.hasMany(Message, { foreignKey: "conversationId" });
  Message.belongsTo(Conversation, { foreignKey: "conversationId" });

  Conversation.hasMany(User, { foreignKey: "conversationId" });
  User.belongsTo(Conversation, { foreignKey: "conversationId" });
};

module.exports = initModel;
