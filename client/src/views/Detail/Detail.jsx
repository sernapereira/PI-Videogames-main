import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading/loading";
import { detallVideogame } from "../../redux/actions";
import style from "./Detail.module.css";
import styleCon from "../../components/CardsContainer/CardsContainer";

let num = 0;
const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(
    () => {
      dispatch(detallVideogame(id));
    },
    [id],
    dispatch
  );
  const juego = useSelector((state) => state.videogames);
  console.log(juego[0].platforms);

  return (
    <div className={styleCon.contenedor}>
      <Link to={"/home"}>
        <button>Volver</button>
      </Link>
      <div className={style.detail}>
        {juego.length > 1 ? (
          <Loading />
        ) : (
          <div>
            <h2>{juego[0].name}</h2>
            <img src={juego[0].background_image} width="700px" height="450px" />

            <div>
              Plataformas del juego :
              {juego[0].platforms[0].platform
                ? juego[0].platforms.map((elem) => (
                    <h5 key={num++}>
                      <li>{elem.platform.name}</li>
                    </h5>
                  ))
                :   <h4>{juego[0].platforms.join(" - ")}</h4>}
            
           
           
           
            </div>
            <h5>id : {juego[0].id}</h5>
            <h3>rating : {juego[0].rating}</h3>
            <h3>
              Fecha de lanzamiento : {juego[0].released || juego[0].Fecha}
            </h3>

            <h3></h3>

            <div>
              Genres
              {juego[0].genres.map((elem) => (
                <h5 key={num++}>
                  <li>{elem.name}</li>
                </h5>
              ))}
            </div>
            <div>
              <h4>Imagenes del juego</h4>

              {juego[0].short_screenshots &&
                juego[0].short_screenshots.map((elem) => (
                  <img
                    src={elem.image}
                    width="500px"
                    height="350px"
                    key={num++}
                  />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
