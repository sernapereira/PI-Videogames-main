import { Link } from "react-router-dom";
import React, { useState } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByAlfabetico,
  filterByCreados,
  filterVideogameByGenres,
  getVideogames,
} from "../../redux/actions";
import Paginado from "../../components/Paginado/Paginado";
import SearchBar from "../../components/SearchBar/SearchBar";
import Loading from "../../components/Loading/loading";
import style from "./Home.module.css";

const Home = () => {
  const allVideogames = useSelector((state) => state.videogames);
  const dispatch = useDispatch();

  //logica paginado
  const [currentPage, setCurrentPage] = useState(1); //en un estado local, con la pagina actual "currentPage" y con un estado la setee "setCurrentPage"
  const [juegosPerPage] = useState(15); // en este estado local colocamos un esatdo que nos diga cuantos juegos tenemos por pagina y va a setear los personajes por pagnas
  const indixeUltimoJuego = currentPage * juegosPerPage; // en esta operacion tenemos  el index del ultimo personaje por pagina // 15
  const indixePrimerJuego = indixeUltimoJuego - juegosPerPage; // el index del primer personaje por pagina // 0

  const [, setOrden] = useState("");

  const currentJuegos = allVideogames.slice(
    indixePrimerJuego,
    indixeUltimoJuego
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  function handleFilterGenres(e) {
    dispatch(filterVideogameByGenres(e.target.value));
  }

  const handleFilterCreate = (e) => {
    dispatch(filterByCreados(e.target.value));
  };

  const handleFilterAlfabetico = (e) => {
    e.preventDefault();
    dispatch(filterByAlfabetico(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  };

  const handlerVideogame = (e) => {
    e.preventDefault();
    dispatch(getVideogames());
  };

  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <ul>
          <li>
            <Link to={"/"}>
              {" "}
              <button className={style.atras}>Atras</button>
            </Link>{" "}
          </li>

          <li>
            <h1>Api VideoJuegos</h1>
          </li>

          <li>
            {" "}
            <button
              className={style.render}
              onClick={(e) => handlerVideogame(e)}
            >
              Render
            </button>
          </li>

          <li>
            {" "}
            <Link to={"/videogame"}>
              <button className={style.crear}>Crear Juego</button>{" "}
            </Link>
          </li>

          <li>
            {" "}
            <select
              onChange={(e) => handleFilterAlfabetico(e)}
              className={style.acendente}
            >
              <option value="Asc">Acendente</option>
              <option value="Desc">Decendente</option>
            </select>
          </li>

          <li>
            {" "}
            <select
              onChange={(e) => handleFilterGenres(e)}
              className={style.categorias}
            >
              <option value="Todos">Todas las Categoria</option>
              <option value="Action">Action</option>
              <option value="Indie">Indie</option>
              <option value="Adventure">Adventure</option>
              <option value="RPG">RPG</option>
              <option value="Strategy">Strategy</option>
              <option value="Shooter">Shooter</option>
              <option value="Casual">Casual</option>
              <option value="Simulation">Simulation</option>
              <option value="Puzzle">Puzzle</option>
              <option value="Arcade">Arcade</option>
              <option value="Platformer">Platformer</option>
              <option value="Racing">Racing</option>
              <option value="Massively Multiplayer">
                Massively Multiplayer
              </option>
              <option value="Sports">Sports</option>
              <option value="Fighting">Fighting</option>
              <option value="Board Games">Board Games</option>
              <option value="Educational">Educational</option>
              <option value="Card">Card</option>
            </select>
          </li>

          <li>
            {
              <select
                onChange={(e) => handleFilterCreate(e)}
                className={style.existente}
              >
                <option value="Todos">Todos</option>
                <option value="Creados">Creados</option>
                <option value="Existente">Existente</option>
              </select>
            }
          </li>

          <li className={style.buscar}>
            {" "}
            <SearchBar />
          </li>
        </ul>
      </nav>
      <Paginado
        juegosPerPage={juegosPerPage}
        allVideogames={allVideogames.length}
        paginado={paginado}
      />

      {currentJuegos.length === 0 ? (
        <Loading />
      ) : (
        <CardsContainer current={currentJuegos} />
      )}

      <Paginado
        juegosPerPage={juegosPerPage}
        allVideogames={allVideogames.length}
        paginado={paginado}
      />
    </div>
  );
};

export default Home;
