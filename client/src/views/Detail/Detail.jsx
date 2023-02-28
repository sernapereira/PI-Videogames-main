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

  return (
    <div className={styleCon.contenedor}>
      <Link to={"/home"}>
        <button className={style.boton} >Volver</button>
      </Link>
      <div className={style.detail}>
        {juego.length > 1 ? (
          <Loading />
        ) : (
          <div>
            <h2>{juego[0].name}</h2>
            <img src={juego[0].background_image} width="700px" height="450px" />
            <h2>{juego[0].name}</h2>
            <ul className={style.lis} >
              <li  >
                <h3>Plataformas</h3>
                {juego[0].platforms[0].platform ? (
                  juego[0].platforms.map((elem) => (
                    <h5 key={num++}>
                      <li className={style.input}>{elem.platform.name}</li>
                    </h5>
                  ))
                ) : (
                  <h4 className={style.input}>{juego[0].platforms.join(" - ")}</h4>
                )}
              </li >
              <li >
               <h3>Genres</h3> 
                {juego[0].genres.map((elem) => (
                  <h5 key={num++}>
                    <li className={style.input}>{elem.name}</li>
                  </h5>
                ))}
              </li>
            </ul>
            <ul  className={style.liss}>
              <li >
                {" "}
                <h3>Id</h3>
                <h5 className={style.fecha} > {juego[0].id}</h5>
              </li>
              <li >
                <h3>Rating</h3>
                <h4 className={style.fecha}>{juego[0].rating}</h4>
              </li>
              <li>
                {" "}
                <h3>Fecha de lanzamiento</h3>
                <h5 className={style.fecha}>
                  {juego[0].released || juego[0].Fecha}
                </h5>
              </li>
            </ul>

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
