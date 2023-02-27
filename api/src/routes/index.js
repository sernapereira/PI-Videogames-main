const { Router } = require("express");
// Importar todos los routers;
const videogamesRouter = require('./videogamesRouter')
const genresRouter = require('./genresRouter')
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/videogame", videogamesRouter)
router.use("/genres", genresRouter)


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
