import { useState } from 'react'

import '../styles/components/housingCollapse/housingCollapse.css'

import arrowUp from '../assets/arrowUp.svg'

const HousingCollapse = (props) => {
  const [divState, setDivState] = useState([false, false])
  const toggle = (index) => {
    setDivState((prevState) => {
      const updatedStates = [...prevState]
      updatedStates[index] = !updatedStates[index]
      return updatedStates
    })
  }
  //   const { equipmentsProps } = props.equipments || {}
  //   const equipments = props.equipments?.split(' ') || []
  return (
    <div className="housingCollapse">
      <div className="housingCollapse__container">
        <div
          onClick={() => toggle(0)}
          className="housingCollapse__container__desc"
        >
          <h2>Déscription</h2>
          <img
            className="housingCollapse__container__arrow"
            src={arrowUp}
            alt=""
          />
        </div>
        {divState[0] && (
          <div className="housingCollapse__container__text">
            <p>{props.description}</p>
          </div>
        )}
      </div>
      <div className="housingCollapse__container">
        <div
          onClick={() => toggle(1)}
          className="housingCollapse__container__equip"
        >
          <h2>Équipements</h2>
          <img
            className="housingCollapse__container__arrow"
            src={arrowUp}
            alt=""
          />
        </div>
        {divState[1] && (
          <div className="housingCollapse__container__text">
            <ul>
              {props.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
export default HousingCollapse
