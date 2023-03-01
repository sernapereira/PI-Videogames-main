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
        <div  className={style.marcas}>
          <img className={style.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/1200px-Xbox_one_logo.svg.png" alt="no fount" />
          <img className={style.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/800px-Playstation_logo_colour.svg.png" alt="no fount" />
          <img className={style.img} src="https://assets.stickpng.com/images/5a1c3678f65d84088faf1403.png" alt="no fount" />
          <img className={style.img} src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Windows_logo_-_2012.png" alt="no fount" />
          <img className={style.img} src="https://img2.freepng.es/20180622/ozk/kisspng-iphone-5-ipod-touch-apple-ios-11-ios-logo-5b2d20e40fd9f0.5796429015296841960649.jpg" alt="no fount" /> 
          <img className={style.img} src="https://upload.wikimedia.org/wikipedia/commons/6/66/Android_robot.png" alt="no fount" />         
          <img className={style.img} src="https://images.vexels.com/media/users/3/140692/isolated/lists/72d1f12edf758d24f5b6db73bac4f297-logo-de-linux.png" alt="no fount" />

        </div>
    </div>
  )
}

export default Landing;