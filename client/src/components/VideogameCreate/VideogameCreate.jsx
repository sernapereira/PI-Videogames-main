import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../redux/actions";
import platformsArray from "./arrayPlataforms";
import { useForm } from "../Hoosk/useForm";
import style from "./Form.module.css";

let num = 0;
const initialForm = {
  name: "",
  description: "",
  platforms: [],
  background_image: "",
  Fecha: "",
  rating: "",
  genres: [],
};

const validateForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'nombre' es requerido";
  }

  if (!form.description.trim()) {
    errors.description = "El campo 'description' es requerido";
  } else if (!regexComments.test(form.description.trim())) {
    errors.description = "El campo 'description' solo acepta 250 caracteres ";
  }

  if (form.platforms.length === 0) {
    errors.platforms = "El campo 'platforms' es requerido";
  }
  if (!form.background_image.trim()) {
    errors.background_image = "El campo 'Imagen' es requerido";
  }
  if (!form.Fecha.trim()) {
    errors.Fecha = "El campo 'Fecha' es requerido";
  }
  if (!form.rating.trim()) {
    errors.rating = "El campo 'rating' es requerido";
  } else if (regexName.test(form.rating.trim())) {
    errors.rating = "El campo 'rating' solo debe de tener numero";
  }

  if (form.genres.length === 0) {
    errors.genres = "El campo 'genres' es requerido";
  }

  if (!platformsArray) {
    errors.platforms = "El campo 'platforms' es requerido";
  }

  return errors;
};

let styleError = {
  fontWeight: "bold",
  color: "#dc3545",
};

const VideogameCreate = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);

  const {
    form,
    errors,

    handlerChange,
    handlerBlur,
    handlerSubmit,
    handlerSelectGenres,
    handlerSelectPlstaforms,
  } = useForm(initialForm, validateForm);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <div className={style.div}>
      <Link to={"/home"}>
        <button className={style.boton}>Volver</button>
      </Link>
      <h1> Sube tu video juego </h1>
      <form onSubmit={(e) => handlerSubmit(e)}>
        <ul className={style.lis}>
          <li>
            <h4>Nombre </h4>
            <input
              className={style.input}
              type="text"
              value={form.name}
              name="name"
              onChange={handlerChange}
              placeholder="Nombre del Video Juego"
              onBlur={handlerBlur}
            />
            {errors.name && <h5 style={styleError}>{errors.name}</h5>}
          </li>

          <li>
            <h4>Image</h4>
            <input
              className={style.input}
              type="text"
              value={form.background_image}
              name="background_image"
              onChange={handlerChange}
              onBlur={handlerBlur}
              placeholder="Url de tu imagen"
            />
            {errors.background_image && (
              <h5 style={styleError}>{errors.background_image}</h5>
            )}
          </li>
        </ul>
        <ul className={style.liss}>
          <li>
            <h4>Fecha</h4>
            <input
              className={style.input}
              type="date"
              value={form.Fecha}
              name="Fecha"
              onChange={handlerChange}
              onBlur={handlerBlur}
              placeholder="Fecha de creacion"
            />
            {errors.Fecha && <h5 style={styleError}>{errors.Fecha}</h5>}
          </li>

          <li>
            <h4>Rating </h4>
            <input
              className={style.input}
              type="text"
              value={form.rating}
              name="rating"
              onChange={handlerChange}
              onBlur={handlerBlur}
              placeholder="El rating de tu juego"
            />
            {errors.rating && <h5 style={styleError}>{errors.rating}</h5>}
          </li>
        </ul>
        <ul className={style.lisss}>
          <li>
            <h4>Genres</h4>
            <select
              className={style.selec}
              onChange={(e) => handlerSelectGenres(e)}
              onBlur={handlerBlur}
              placeholder="Selecciona genero"
            >
              <option value="">---</option>
              {genres &&
                genres.map((elem) => (
                  <option key={num++} value={elem.elem}>
                    {elem.elem}
                  </option>
                ))}
            </select>
            {errors.genres && <h5 style={styleError}>{errors.genres}</h5>}
            <ul>
              <li className={style.lis}>
                {form.genres.map((el) => el + ", ")}
              </li>
            </ul>
          </li>
          <li>
            <h4>Platforms</h4>
            <select
              className={style.selec}
              onChange={(e) => handlerSelectPlstaforms(e)}
              onBlur={handlerBlur}
              placeholder="Plataforms"
            >
              <option value="">---</option>
              {platformsArray &&
                platformsArray.map((elem) => (
                  <option key={num++} value={elem.name}>
                    {elem.name}
                  </option>
                ))}
            </select>
            {errors.platforms && <h5 style={styleError}>{errors.platforms}</h5>}

            <ul>
              <li className={style.lis}>
                {form.platforms.map((el) => el + ", ")}
              </li>
            </ul>
          </li>
        </ul>
        <div>
          <h4>Description</h4>
          <textarea
            name="description"
            cols="50"
            rows="5"
            placeholder="Describe tu juego"
            onChange={handlerChange}
            onBlur={handlerBlur}
            value={form.description}
          ></textarea>
          {errors.description && (
            <h5 style={styleError}>{errors.description}</h5>
          )}
        </div>
        <div>
          {console.log(form)}
          <button
            type="submit"
            value="Enviar"
            disabled={
              form.name === "" ||
              form.Fecha === "" ||
              form.background_image === "" ||
              form.description === "" ||
              form.genres.length === 0 ||
              form.platforms.length === 0 ||
              form.rating === ""
            }
          >
            Subir
          </button>
        </div>
      </form>
    </div>
  );
};

export default VideogameCreate;
