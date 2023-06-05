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
    <section className="housingBanner">
      <img
        className="housingBanner__arrowPrev"
        src={arrowPrev}
        alt=""
        onClick={prevSlide}
      />
      <img
        className="housingBanner__arrowNext"
        src={arrowNext}
        alt=""
        onClick={nextSlide}
      />
      <span className="housingBanner__counter">
        {current + 1}/{props.data.length}
      </span>
      {props.data.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? 'housingBanner__slide active'
                : 'housingBanner__slide inactive'
            }
            key={index}
          >
            {index === current && (
              <img className="housingBanner__slide__img" src={slide} alt="" />
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
