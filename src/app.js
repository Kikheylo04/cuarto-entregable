const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dataBase = require("./utils/database");


const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());



dataBase
  .sync()
  .then(() => console.log("Base de datos sync"))
  .catch((error) => console.log(error));

const PORT = 8000;



app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});