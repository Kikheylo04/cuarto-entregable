const UserConversation = require("../models/userConversationModel");
const User = require("../models/userModel");

class UserService {
  static async create(data) {
    try {
      const newUser = await User.create(data);
      return newUser;
    } catch (error) {
      throw error;
    }
  }
  static async getUser(email) {
    try {
      const user = await User.findOne({
        where: { email },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
  static async getUserByPk(id) {
    try {
      const user = await User.findByPk(id);
      return user;
    } catch (error) {
      throw error;
    }
  }
  static async getListUsers() {
    try {
      const listUsers = await User.findAll();
      return listUsers;
    } catch (error) {
      throw error;
    }
  }
  static async getListConversations(id) {
    try {
      const listConversation = await UserConversation.findAll({
        where: { userId: id },
        attributes: ["id"],
        include: [
          {
            model: conversation,
            attributes: ["id", "type"],
          },
        ],
      });
      return listConversation;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
