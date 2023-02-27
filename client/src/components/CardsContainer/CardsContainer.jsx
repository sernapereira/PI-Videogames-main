import React, { useState } from "react";
import Card from "../Card/Card";
import Loading from "../Loading/loading";
import NotName from "../NotName/NotName";
import style from "./CardsContainer.module.css";

const CardsContainer = ({ current }) => {
  let aux =
    current.filter((e) => e.name === "0000").length === 1 ? true : false;



  return (
    <div className={style.contenedor}>
      {aux ? (
        <NotName />
      ) : (
        current.map((elem) => {
          return (
            <Card
              background_image={elem.background_image}
              name={elem.name}
              genres={elem.genres}
              id={elem.id}
              key={elem.id}
            />
          );
        })
      )}

      <div></div>
    </div>
  );
};

export default CardsContainer;
