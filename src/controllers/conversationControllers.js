const ConversationService = require("../services/conversationService");

const createConversation = async (req, res, next) => {
  try {
    const { title, type } = req.body;
    if (type != "Personal" && type != "Grupal") {
      return next({
        status: 400,
        message: "Solo hay dos tipos de conversación, Personal o Grupal",
        error: [],
      });
    }
    const data = { title, type };
    const newConversation = await ConversationService.create(data);
    res.status(201).json(newConversation);
  } catch (error) {
    next(error);
  }
};
const listConversation = async (req, res, next) => {
  try {
    const listConversation = await ConversationService.getListConversations();
    res.status(200).json(listConversation);
  } catch (error) {
    next(error);
  }
};
const deleteConversation = async (req, res, next) => {
  try {
    const { id } = req.params;
    await ConversationService.delete(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
const getConversation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const conversation = await ConversationService.getConversation(id);
    res.status(200).json(conversation);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createConversation,
  listConversation,
  deleteConversation,
  getConversation,
};
