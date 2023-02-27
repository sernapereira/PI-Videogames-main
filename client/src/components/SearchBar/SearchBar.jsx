import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameVidejuegos } from "../../redux/actions";
import style from './SerchBar.module.css'

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  
  const handleInputChange = (e) => {  
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getNameVidejuegos(name));
    
  };

  return (
    <div>
      <div>
      <button type="submit" onClick={(e) => handleSubmit(e)} className={style.enviar}>
          Buscar
        </button>
        <input
        className={style.buscar}
          type="text"
          placeholder="Buscar..."
          onChange={(e) => {
            handleInputChange(e);
          }}
          
          
          
        />
       
      </div>
    </div>
  );
};

export default SearchBar;
