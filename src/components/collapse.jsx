import { useState } from 'react'

import '../styles/components/collapse/collapse.css'

import arrowUp from '../assets/arrowUp.svg'
import arrowDown from '../assets/arrowDown.png'

const Collapse = (props, isOpen) => {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => setIsClicked(!isClicked)

  return (
    <div className="collapse">
      <div className="collapse__container">
        <h2>{props.label}</h2>
        <img
          className={
            isClicked
              ? 'collapse__container__arrow '
              : 'collapse__container__arrow active'
          }
          src={arrowDown}
          alt="fleche"
          onClick={handleClick}
        />
      </div>
      <div
        className={
          isClicked ? 'collapse__text opened' : 'collapse__text closed'
        }
      >
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Collapse
