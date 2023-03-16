const { Router } = require("express");
const {
  createUserConversation,
  listUserConversation,
} = require("../controllers/userConversationControllers");
const { createValidator } = require("../validators/userConversationValidators");

const router = Router();

router.post(
  "/api/v1/users_conversations",
  createValidator,
  createUserConversation
);
router.get("/api/v1/users_conversations", listUserConversation);

module.exports = router;
