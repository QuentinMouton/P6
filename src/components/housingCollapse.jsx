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
    <div className="housingCollapse">
      <div className="housingCollapse__container">
        <div className="housingCollapse__container__desc">
          <h2>Déscription</h2>
          <img
            className={
              divState[0]
                ? 'housingCollapse__container__arrow actived'
                : 'housingCollapse__container__arrow '
            }
            src={arrowDown}
            alt=""
            onClick={() => toggle(0)}
          />
        </div>
        <div
          className={
            divState[0]
              ? 'housingCollapse__container__text opened'
              : 'housingCollapse__container__text closed'
          }
        >
          <br />
          <p>{props.description}</p>
          <br />
        </div>
      </div>
      <div className="housingCollapse__container">
        <div className="housingCollapse__container__equip">
          <h2>Équipements</h2>
          <img
            className={
              divState[1]
                ? 'housingCollapse__container__arrow actived'
                : 'housingCollapse__container__arrow '
            }
            src={arrowDown}
            alt=""
            onClick={() => toggle(1)}
          />
        </div>
        <div
          className={
            divState[1]
              ? 'housingCollapse__container__text opened'
              : 'housingCollapse__container__text closed'
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
