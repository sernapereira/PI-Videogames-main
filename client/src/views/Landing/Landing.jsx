import React from "react"
import { Link } from "react-router-dom"
import style from './Landing.module.css'


const Landing =  () => {
  return (
    <div className={style.Landing}>
        <h1>Mi Primer Proyecto</h1>
        <Link to='/home'>
          <button className={style.boton} >Ingresar</button>
        </Link>
    </div>
  )
}

export default Landing;