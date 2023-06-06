import { useState } from 'react'

import '../styles/components/housingBanner/housingBanner.css'

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
    <section className="housing__banner">
      <img
        className="housing__banner__arrowPrev"
        src={arrowPrev}
        alt=""
        onClick={prevSlide}
      />
      <img
        className="housing__banner__arrowNext"
        src={arrowNext}
        alt=""
        onClick={nextSlide}
      />
      <span className="housing__banner__counter">
        {current + 1}/{props.data.length}
      </span>
      {props.data.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? 'housing__banner__slide active'
                : 'housing__banner__slide inactive'
            }
            key={index}
          >
            {index === current && (
              <img className="housing__banner__slide__img" src={slide} alt="" />
            )}
          </div>
        )
      })}
    </section>
  )
}
export default HousingBanner
