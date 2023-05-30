//variables de entorno
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//utilidades del servidor colors
require("colors");
require("morgan");
require("dotenv").config();

//Variable principal
const app = express();
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//parse application /json
app.use(bodyParser.json());
//Base de datos con mongo
mongoose
  .connect(process.env.DATABASE_URI + process.env.DATABASE_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Base de datos conectada".bgGreen))
  .catch((error) => console.log(error));

//Templates engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//Archivos estaticos
app.use(express.static(__dirname + "/public"));

//rutas
app.use("/client", require("./router/client"));
app.use("/admin", require("./router/admin"));
app.use("/", require("./router/webRutas"));
//MIDDLEWARE
app.use((req, res, next) => {
  res.status(404).render("404", {
    Tittle: "404",
    descripcion: "Error esta pagina no existe",
  });
});

//Levantamiento de servidor express
app.listen(process.env.PORT, () => {
  console.log("Server Started on port".blue, process.env.PORT);
  console.log(`http://localhost:${process.env.PORT}`.red);
});
