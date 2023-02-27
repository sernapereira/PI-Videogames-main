const { Videogame, Genres } = require("../db");
const { ApiGenres } = require("./api");

const getVideogamesBdd = async () => {
  const typeBdd = await Videogame.findAll({
    include: {
      model: Genres,
      attributes: ["name"],
    },
  });
  return typeBdd;
};

const genresBdd = async () => {
  const genresApi = await ApiGenres(); //trae todos los genres

  for (const genres of genresApi) {
    await Genres.findOrCreate({ where: { name: genres.name } });
  }
  const allGenres = await Genres.findAll();

  return allGenres || "err";
};

module.exports = { getVideogamesBdd, genresBdd };
