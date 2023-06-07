import { useParams } from 'react-router-dom'
import { HousingList } from '../datas/housingList'

import HousingBanner from '../components/housingBanner'
import HousingHost from '../components/housingHost'
import HousingRate from '../components/housingRate'
import HousingCollapse from '../components/housingCollapse'

import '../styles/pages/housing/housing.css'

const Housing = () => {
  const { id } = useParams()
  const housing = HousingList.find((housing) => housing.id === id)
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
