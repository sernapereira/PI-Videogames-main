const { Router } = require("express");
const {
  getVideogamesHandler,
  getVideogameHandler,
  createVideogamesHandler,
} = require("../handlres/videogamesHandlers");

const videogamesRouter = Router();

//RUTA PARA MOSTRAR TODOS LOS JUEGOS
videogamesRouter.get("/", getVideogamesHandler);
//RUTA PARA MOSTRAR UN JUEGO POR ID
videogamesRouter.get("/:id", getVideogameHandler);
//RUTA PARA CREAR JUEGO
videogamesRouter.post("/", createVideogamesHandler);

module.exports = videogamesRouter;
