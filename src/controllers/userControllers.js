const UserService = require("../services/userService");

const getListUsers = async (req, res, next) => {
  try {
    const listUsers = await UserService.getListUsers();
    res.status(201).json(listUsers);
  } catch (error) {
    next(error);
  }
};
const  getConversations = async (req, res, next) => {
  try {
 const {id} = req.params;
 const listConversations = await UserService.getConversations()
 res.status(201).json(listConversations);
  } catch (error) {
    next(error);
  }
};
module.exports = { getListUsers , getConversations};
