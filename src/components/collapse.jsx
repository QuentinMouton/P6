import { useState } from 'react'

import '../styles/components/collapse/collapse.css'

import arrowDown from '../assets/arrowDown.png'

// Création du composant qui gère les collapses
// Page "about"
const Collapse = (props) => {
  /*Création d'une variable "isClicked" initialisée à "false" et 
  fournit une fonction "setIsClicked" pour mettre à jour la variable*/
  const [isClicked, setIsClicked] = useState(false)
  //Création d'une fonction pour inverser la valeur de "isClicked"
  const handleClick = () => setIsClicked(!isClicked)

  return (
    <div className="collapse">
      <div className="collapse__container">
        <h2>{props.label}</h2>
        <img
          className={
            /* Change la class "inactive" par
            "active" lors du click sur la flèche */
            isClicked
              ? 'collapse__container__arrow active'
              : 'collapse__container__arrow inactive'
          }
          src={arrowDown}
          alt="fleche"
          onClick={handleClick}
        />
      </div>
      <div
        className={
          /* Change la class "closed" par "opened" lors du click sur la flèche */
          isClicked ? 'collapse__text opened' : 'collapse__text closed'
        }
      >
        <br />
        <p>{props.text}</p>
        <br />
      </div>
    </div>
  )
}

export default Collapse
