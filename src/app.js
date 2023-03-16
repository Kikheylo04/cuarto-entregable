const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dataBase = require("./utils/database");
const initModel = require("./models/initModel");
const errorHandlerRouter = require("./routes/errorHandlerRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const conversatioRoutes = require("./routes/conversationRoutes");
const userConversationRoutes = require("./routes/userConversationRoutes");
const messageRoutes = require("./routes/messageRoutes")

initModel();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

dataBase
  .authenticate()
  .then(() => {
    console.log("Base de datos conectada");
  })
  .catch((error) => console.log(error));

dataBase
  .sync({ alter: false })
  .then(() => console.log("Base de datos sync"))
  .catch((error) => console.log(error));

app.use(authRoutes);
app.use(userRoutes);
app.use(conversatioRoutes);
app.use(userConversationRoutes);
app.use(messageRoutes);

errorHandlerRouter(app);

const PORT = 9000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
