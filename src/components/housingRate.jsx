import '../styles/components/housingRate/housingRate.css'

import starRed from '../assets/starRed.png'
import star from '../assets/star.png'

const HousingRate = (props) => {
  const count = props.rate
  const rates = () => {
    const allStars = []
    for (let i = 0; i < count; i++) {
      allStars.push(
        <img key={i} className="housingRate__img" src={starRed} alt="" />
      )
    }
    while (allStars.length < 5) {
      allStars.push(
        <img
          key={`${allStars.length}`}
          className="housingRate__img"
          src={star}
          alt=""
        />
      )
    }
    return allStars
  }

  return <div className="housingRate">{rates()}</div>
}

export default HousingRate
