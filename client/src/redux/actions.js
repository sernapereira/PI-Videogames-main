import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
const errors = [{ name: "0000" }];

export const getVideogames = () => {
  return async function (dispatch) {
    const json = await axios.get(`http://localhost:3001/videogame`);

    const videogames = json.data;

    return dispatch({
      type: GET_VIDEOGAMES,
      payload: videogames,
    });
  };
};

export const FILTER_BY_GENRES = "FILTER_BY_GENRES";
export const filterVideogameByGenres = (payload) => {
  return {
    type: FILTER_BY_GENRES,
    payload,
  };
};

export const FILTER_CREADOS = "FILTER_CREADOS";
export const filterByCreados = (payload) => {
  return {
    type: FILTER_CREADOS,
    payload,
  };
};

export const FILTER_BY_ALFABETICO = "FILTER_BY_ALFABETICO";
export const filterByAlfabetico = (payload) => {
  return {
    type: FILTER_BY_ALFABETICO,
    payload,
  };
};

export const GET_NAME_JUEGOS = "GET_NAME_JUEGOS";
export const getNameVidejuegos = (name) => {
  return async (dispatch) => {
    try {
      const json = await axios.get(
        `http://localhost:3001/videogame?name=${name}`
      );

      return dispatch({
        type: GET_NAME_JUEGOS,
        payload: json.data.length === 0 ? errors : json.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const GET_GENRES = "GET_GENRES";
export const getGenres = () => {
  return async (dispatch) => {
    try {
      const json = await axios.get("http://localhost:3001/genres");
      return dispatch({
        type: GET_GENRES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const POST_VIDEOGAME = "POST_VIDEOGAME";
export const postVideogames = (payload) => {
  return async (dispatch) => {
    const response = await axios.post(
      "http://localhost:3001/videogame",
      payload
    );
    return response;
  };
};

export const DETALLE_VIDEOGAME = "DETALLE_VIDEOGAME";
export const detallVideogame = (id) => {
  return async function (dispatch) {
    try {
      const json = await axios.get(`http://localhost:3001/videogame/${id}`);

      return dispatch({
        type: DETALLE_VIDEOGAME,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
