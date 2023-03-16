const ConversationService = require("../services/conversationService");
const UserConversationService = require("../services/userConversationService");
const UserService = require("../services/userService");

const createUserConversation = async (req, res, next) => {
  try {
    const { userId, conversationId } = req.body;
    const user = await UserService.getUserByPk(userId);
    const conversation = await ConversationService.getConversationByPk(
      conversationId
    );
    const userConversation =
      await UserConversationService.getListUserConversations(
        conversationId,
        userId
      );
    if (!user) {
      return next({
        status: 400,
        message: "No existe este usuario con ese id",
        error: [],
      });
    }
    if (!conversation) {
      return next({
        status: 400,
        message: "No existe esa conversación con ese id",
        error: [],
      });
    }
    if (userConversation.length > 0) {
      return next({
        status: 400,
        message: "Ya existe un registro con esos datos",
        error: [],
      });
    }
    const listConversations =
      await UserConversationService.getListUserConversationByConversationId(
        conversationId
      );
      if(conversation.type === "Personal" && listConversations.length >=2){
        return next({
            status: 400,
            message: "Solo se puede dos registros para la conversación de tipo personal",
            error: [],
          });
      }
    const data = { userId, conversationId };
    const newUserConversation = await UserConversationService.create(data);
    res.status(201).json(newUserConversation);
  } catch (error) {
    next(error);
  }
};
const listUserConversation = async (req, res, next) => {
  try {
    const listUserConversation =
      await UserConversationService.getListUserConversations();
    res.status(200).json(listUserConversation);
  } catch (error) {
    next(error);
  }
};

module.exports = { createUserConversation, listUserConversation };
