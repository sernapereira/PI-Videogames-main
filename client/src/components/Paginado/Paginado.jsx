import React from "react";
import style from './Paginado.module.css'

const Paginado = ({ juegosPerPage, allVideogames, paginado }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(allVideogames / juegosPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav className={style.nav}>
      <ul>
        {pageNumber &&
          pageNumber.map((number) => (
            <li key={number}>
              <h4 onClick={() => paginado(number)}>{number}</h4>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Paginado;
