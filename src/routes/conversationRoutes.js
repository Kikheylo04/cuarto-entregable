const { Router } = require("express");
const {
  createConversation,
  listConversation,
  deleteConversation,
  getConversation,
} = require("../controllers/conversationControllers");
const {
  createValidator,
  deleteValidator,
} = require("../validators/conversationValidators");

const router = Router();

router.post("/api/v1/conversations", createValidator, createConversation);
router.get("/api/v1/conversations", listConversation);
router.get("/api/v1/conversations/:id", getConversation);
router.delete("/api/v1/conversations/:id", deleteValidator, deleteConversation);

module.exports = router;
