import '../styles/components/housingRate/housingRate.css'

import starRed from '../assets/starRed.png'
import star from '../assets/star.png'

const HousingRate = (props) => {
  const count = props.rate
  const rates = () => {
    const allStars = []
    for (let i = 0; i < count; i++) {
      allStars.push(
        <img
          key={i}
          className="housing__identityRate__rate__img"
          src={starRed}
          alt=""
        />
      )
    }
    while (allStars.length < 5) {
      allStars.push(
        <img
          key={`${allStars.length}`}
          className="housing__identityRate__rate__img"
          src={star}
          alt=""
        />
      )
    }
    return allStars
  }

  return (
    <div className="housing__identityRate">
      <div className="housing__identityRate__identity">
        <p className="housing__identityRate__identity__name">{props.name}</p>
        <img
          className="housing__identityRate__identity__img"
          src={props.imgSrc}
          alt=""
        />
      </div>
      <div className="housing__identityRate__rate">{rates()}</div>
    </div>
  )
}

export default HousingRate
