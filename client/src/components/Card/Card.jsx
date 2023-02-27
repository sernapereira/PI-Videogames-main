import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
let num = 1;

const Card = (props) => {
  <Card key={props.toString()} value={props} />;

  return (
    <div className={style.card}>
      <div>
        <Link to={`/home/${props.id}`} className={style.Link}>
          <img
            src={props.background_image}
            alt="img no fount"
            width="300px"
            height="200px"
          />
          <h3>{props.name}</h3>
          
        </Link>

        <div>
          Genres
          {props.genres &&
            props.genres.map((elem) => (
              <h5 key={num++}>
                <li>{elem.name}</li>
              </h5>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
