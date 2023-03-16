const UserConversation = require("../models/userConversationModel");

class UserConversationService {
  static async create(data) {
    try {
      const newUserConversation = await UserConversation.create(data);
      return newUserConversation;
    } catch (error) {
      throw error;
    }
  }
  static async getListUserConversations(conversationId = null, userId = null) {
    try {
      let listUserConversation = await UserConversation.findAll();
      if (conversationId != null && userId != null) {
        listUserConversation = await UserConversation.findAll({
          where: { conversationId, userId },
        });
      }
      return listUserConversation;
    } catch (error) {
      throw error;
    }
  }
  static async getListUserConversationByConversationId(conversationId) {
    try {
      const listUserConversation = await UserConversation.findAll({
        where: { conversationId },
      });
      return listUserConversation;
    } catch (error) {
      throw error;
    }
  }
  static async getUserConversationByPk(id) {
    try {
      const userConversation = await UserConversation.findByPk(id);
      return userConversation;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserConversationService;
