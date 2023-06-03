import { useState } from 'react'

import arrowNext from '../assets/arrowNext.png'
import arrowPrev from '../assets/arrowPrevious.png'

const HousingBanner = (props) => {
  const [current, setCurrent] = useState(0)
  const length = props.data.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  return (
    <section className="">
      <img className="arrowPrev" src={arrowPrev} alt="" onClick={prevSlide} />
      <img className="arrowNext" src={arrowNext} alt="" onClick={nextSlide} />
      {props.data.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img className="image" src={slide.pictures} alt="" />
            )}
          </div>
        )
      })}
    </section>
  )
}
export default HousingBanner

// <div className="carousel">
//   <img src={props.imgSrc} alt={`${props.title}`} />
// </div>
