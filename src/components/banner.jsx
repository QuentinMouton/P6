import { useLocation } from 'react-router-dom'

import '../styles/components/banner/banner.sass'

//Création du composent qui gère les bannières
//Pages "home" et "about"
const Banner = (props) => {
  //Création d'une variable qui permet d'acceder au infos de l'URL
  const location = useLocation()
  return (
    <div key={props.index} className="banner">
      <div
        className={
          /* Applique la class "banner__container-about" si l'utilisateur
          est sur la page "about" */
          location.pathname === '/about'
            ? 'banner__container banner__container-about'
            : 'banner__container'
        }
      >
        <img
          className="banner__container__img"
          src={props.imgSrc}
          alt={props.alt}
        />
      </div>
      <div className="banner__paragraph">{props.title}</div>
    </div>
  )
}

export default Banner
