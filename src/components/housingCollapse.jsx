import { useState } from 'react'

import '../styles/components/housingCollapse/housingCollapse.css'

import arrowDown from '../assets/arrowDown.png'

const HousingCollapse = (props) => {
  const [divState, setDivState] = useState([false, false])
  const toggle = (index) => {
    setDivState((prevState) => {
      const updatedStates = [...prevState]
      updatedStates[index] = !updatedStates[index]
      return updatedStates
    })
  }
  return (
    <div className="housing__collapse">
      <div className="housing__collapse__container">
        <div className="housing__collapse__container__desc">
          <h2>Déscription</h2>
          <img
            className={
              divState[0]
                ? 'housing__collapse__container__arrow actived'
                : 'housing__collapse__container__arrow '
            }
            src={arrowDown}
            alt=""
            onClick={() => toggle(0)}
          />
        </div>
        <div
          className={
            divState[0]
              ? 'housing__collapse__container__text opened'
              : 'housing__collapse__container__text closed'
          }
        >
          <br />
          <p>{props.description}</p>
          <br />
        </div>
      </div>
      <div className="housing__collapse__container">
        <div className="housing__collapse__container__equip">
          <h2>Équipements</h2>
          <img
            className={
              divState[1]
                ? 'housing__collapse__container__arrow actived'
                : 'housing__collapse__container__arrow '
            }
            src={arrowDown}
            alt=""
            onClick={() => toggle(1)}
          />
        </div>
        <div
          className={
            divState[1]
              ? 'housing__collapse__container__text opened'
              : 'housing__collapse__container__text closed'
          }
        >
          <br />
          <ul>
            {props.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
          <br />
        </div>
      </div>
    </div>
  )
}
export default HousingCollapse
