const { getAllGenres } = require("../controller/genresController");

const getGenresHandler = async (req, res) => {
  try {
    const resultado = await getAllGenres();
    res.status(200).json(resultado);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};



module.exports = { getGenresHandler, };
