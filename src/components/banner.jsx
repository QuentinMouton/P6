import { useLocation } from 'react-router-dom'

import '../styles/components/banner/banner.css'

const Banner = (props) => {
  const location = useLocation()
  return (
    <div key={props.index} className="banner">
      <div
        className={
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
