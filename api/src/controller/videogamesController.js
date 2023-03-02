const { getApiVideogame } = require("../baseData/api");
const { generalDataVideogames } = require("../baseData/relacionApiDbb");
const { Videogame, Genres } = require("../db");
const { getVideogamesBdd } = require("../baseData/bdd");

const getAllVideogames = async () => {
  const todosVideogames = await generalDataVideogames();

  return todosVideogames.map((elem) => {
    return {
      id: elem.id,
      name: elem.name,
      platforms: elem.platforms,
      background_image: elem.background_image,
      short_screenshots: elem.short_screenshots,
      fecha: elem.released,
      rating: elem.rating,
      genres: elem.genres,
      created: elem.created,
    };
  });
};

const getVideoGameById = async (id, res) => {
  const todosVideogames = await generalDataVideogames();
  let gameid = todosVideogames.filter((elem) => elem.id == id);
  if (gameid.length === 0) {
    res.status(404).json({ error: `id: ( ${id} ) invalido` });
  } else {
    return gameid;
  }
};

const getVideogameByName = async (name, res) => {
  const data = await generalDataVideogames();
  let gameName = data.filter((elem) => elem.name.toLowerCase().includes(name));

  return gameName;
};

const createVideogames = async (
  name,
  description,
  platforms,
  background_image,
  Fecha,
  rating,
  genres,
  created
) => {
  try {
    let create = await Videogame.create({
      name,
      description,
      platforms,
      background_image,
      Fecha,
      rating,
      created,
    });

    let genresdb = await Genres.findAll({ where: { name: genres } });

    //const map = genresdb.filter(el=> el.dataValues.name === genres)

    create.addGenres(genresdb);

    return { Mensaje: "Juego creado !!!!" };
  } catch (error) {}
};

const update = async (id, data) => {
  const index = await generalDataVideogames();

  const indexx = index.findIndex((elem) => elem.id === id);

  if (index === -1) {
    throw Error({ message: "Juego no encontrado" });
  } else {
    const juego = index[indexx];
    console.log(index[indexx]);

    generalDataVideogames[indexx] = {
      ...juego,
      ...data,
    };
    return generalDataVideogames[indexx];
  }
};

module.exports = {
  getAllVideogames,
  createVideogames,
  getVideoGameById,
  getVideogameByName,
  update,
};
