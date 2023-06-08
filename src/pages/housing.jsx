import { useParams } from 'react-router-dom'
import { HousingList } from '../datas/housingList'

import HousingBanner from '../components/housingBanner'
import HousingHost from '../components/housingHost'
import HousingRate from '../components/housingRate'
import HousingCollapse from '../components/housingCollapse'

import Error from './error'

import '../styles/pages/housing/housing.css'

// Création de la page "housing"
// Affiche les composants "housingBanner", "housingHost", "housingRate", "housingCollapse"
const Housing = () => {
  // Création d'une variable "id" qui récupère la valeur ID dans l'URL
  const { id } = useParams()
  // Création d'une variable "housing" qui cherche l'id correspondant à la variable "id"
  const housing = HousingList.find((housing) => housing.id === id)
  //Si la variable "housing" est falsy renvoi à la page "error"
  if (!housing) {
    return <Error />
  }
  return (
    <div className="housing">
      <HousingBanner data={housing.pictures} />
      <div className="housing__host">
        <HousingHost
          id={housing.id}
          title={housing.title}
          location={housing.location}
          tags={housing.tags}
        />
        <HousingRate
          rate={housing.rating}
          name={housing.host.name}
          imgSrc={housing.host.picture}
        />
      </div>
      <HousingCollapse
        description={housing.description}
        equipments={housing.equipments}
      />
    </div>
  )
}
export default Housing
