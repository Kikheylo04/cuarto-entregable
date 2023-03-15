const User = require("../models/userModel");

class UserService {
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

  static async create(newUser) {
    try {
      const userCreated = await User.create(newUser);
      return userCreated;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, updateUserData) {
    try {
      const updatedUser = await User.update(updateUserData, {
        where: { id },
      });
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
