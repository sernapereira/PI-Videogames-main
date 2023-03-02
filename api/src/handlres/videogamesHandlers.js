const {
  getAllVideogames,
  createVideogames,
  getVideoGameById,
  getVideogameByName,
  update,
} = require("../controller/videogamesController");

const getVideogamesHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const resultado = name
      ? await getVideogameByName(name.toLowerCase(), res) 
      : await getAllVideogames();
      
     
    res.status(200).json(resultado);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getVideogameHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const gameId = await getVideoGameById(id, res);
    res.status(200).json(gameId);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const createVideogamesHandler = async (req, res) => {
  const {
    name,
    description,
    platforms,
    background_image,
    Fecha,
    rating,
    genres,
    created
  } = req.body;
  try {
    const newVideogame = await createVideogames(
      name,
      description,
      platforms,
      background_image,
      Fecha,
      rating,
      genres,
      created
    );
    res.status(201).json(newVideogame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const actualizarVideojuego = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const videojuego = await update(id, body);
    res.status(200).json(videojuego);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  getVideogameHandler,
  getVideogamesHandler,
  createVideogamesHandler,
  actualizarVideojuego
};
