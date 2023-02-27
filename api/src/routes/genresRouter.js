const { Router } = require("express");
const { getGenresHandler, } = require("../handlres/genresHandlers");

const genresRouter = Router();

//MUESTRA TODOS LOS GENEROS
genresRouter.get("/", getGenresHandler);


module.exports = genresRouter;
