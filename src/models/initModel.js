const User = require("./userModel");
const Conversation = require("./conversationModel");
const Message = require("./messageModel");
const UserConversation = require("./userConversationModel");

const initModel = () => {
  User.hasMany(UserConversation, { foreignKey: "userId" });
  UserConversation.belongsTo(User, { foreignKey: "userId" });

  Conversation.hasMany(UserConversation, { foreignKey: "conversationId" });
  UserConversation.belongsTo(Conversation, { foreignKey: "conversationId" });

  UserConversation.hasMany(Message, { foreignKey: "userConversationId" });
  Message.belongsTo(UserConversation, { foreignKey: "userConversationId" });
};

module.exports = initModel;
