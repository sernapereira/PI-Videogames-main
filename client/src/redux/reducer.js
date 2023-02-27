import {
  DETALLE_VIDEOGAME,
  FILTER_BY_ALFABETICO,
  FILTER_BY_GENRES,
  FILTER_CREADOS,
  GET_GENRES,
  GET_NAME_JUEGOS,
  GET_VIDEOGAMES,
  POST_VIDEOGAME,
} from "./actions";

const initialState = {
  videogames: [],
  allVideogames: [],
  genres: [],
};

const errors = [{name: "0000"}]
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        allVideogames: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case FILTER_BY_GENRES:
      const allVideogames = state.allVideogames;
      const genresFilterd =
        action.payload === "Todos"
          ? allVideogames
          : allVideogames.filter((e) =>
              e.genres.map((elem) => elem.name).includes(action.payload)
            );
      return {
        ...state,
        videogames: genresFilterd,
      };
    case FILTER_CREADOS:
      const allVideogames2 = state.allVideogames;
      const createFIlter =
        action.payload === "Creados"
          ? allVideogames2.filter((el) => el.created)
          : allVideogames2.filter((el) => !el.created);
console.log(createFIlter);
      return {
        ...state,
        videogames:
          action.payload === "Todos" ? state.allVideogames : createFIlter.length > 0 ? createFIlter : errors
      };
    case FILTER_BY_ALFABETICO:
      const filterAlfabetico =
        action.payload === "Asc"
          ? state.videogames.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : action.payload === "Desc"
          ? state.videogames.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            })
          : state.allVideogames;

      return {
        ...state,
        videogames: filterAlfabetico,
      };
    case GET_NAME_JUEGOS:
      return {
        ...state,
        videogames: action.payload,
      };

    case POST_VIDEOGAME:
      return {
        ...state,
      };
    case DETALLE_VIDEOGAME:
      return { ...state, videogames: action.payload };

    default:
      return state;
  }
};

export default rootReducer;
