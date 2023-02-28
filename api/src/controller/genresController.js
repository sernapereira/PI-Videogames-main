const { generalDataGenres } = require("../baseData/relacionApiDbb");

const getAllGenres = async () => {
  const todosVideogames = await generalDataGenres();

  return todosVideogames.map((elem) => {
    return {
      id: elem.id,
      elem: elem.name,
    };
  });
};

module.exports = { getAllGenres };
