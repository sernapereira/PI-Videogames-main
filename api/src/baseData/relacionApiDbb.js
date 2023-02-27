const { getApiVideogame} = require("./api");
const { getVideogamesBdd, genresBdd } = require("./bdd");

const generalDataVideogames = async () => {
  dataApi = await getApiVideogame();
  dataBdd = await getVideogamesBdd();
  return dataBdd.concat(dataApi);
};

const generalDataGenres = async () => {
  return dataApi = await genresBdd();
};
module.exports = { generalDataVideogames, generalDataGenres };
