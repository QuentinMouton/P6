import '../styles/components/banner/banner.css'

import images from '../assets/bannerHome.webp'

const Banner = (props) => {
  return (
    <div key={props.index} className="banner">
      <div className="banner__container">
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
