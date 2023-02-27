const axios = require("axios");
const { Videogame, Genres } = require("../db");
const { API_KEY } = process.env;

const getApiVideogame = async () => {
  let arry = [];
  let data = await axios
    .get(
      `https://api.rawg.io/api/games?key=${API_KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7`
    )
    .then((resultado) => {
      return resultado.data;
    });
  while (arry.length !== 100) {
    arry.push(...data.results);
    data = await axios.get(data.next).then((res) => {
      return res.data;
    });
  }
  return arry || { name: "Problemas en la API !!!" };
};

const ApiGenres = async () => {
  const dataRenges = await axios
    .get(
      `https://api.rawg.io/api/genres?key=${API_KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7`
    )
    .then((res) => {
      return res.data;
    });

  return dataRenges.results;
  
};

module.exports = { getApiVideogame, ApiGenres };
