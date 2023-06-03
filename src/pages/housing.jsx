import { useParams } from 'react-router-dom'
import { HousingList } from '../datas/housingList'

import HousingBanner from '../components/housingBanner'
import HousingHost from '../components/housingHost'
import HousingTags from '../components/housingTags'
import HousingRate from '../components/housingRate'
import HousingCollapse from '../components/housingCollapse'

import '../styles/pages/housing/housing.css'

const Housing = () => {
  const { id } = useParams()
  const housing = HousingList.find((housing) => housing.id === id)
  return (
    <div className="housing">
      {/* {housing.pictures.map((e, index) => ( */}
      <HousingBanner data={HousingList} img={HousingList.pictures} />
      {/* ))} */}
      <HousingHost
        title={housing.title}
        location={housing.location}
        name={housing.host.name}
        imgSrc={housing.host.picture}
      />
      <div className="housing__TagsRate">
        <ul className="tags">
          {housing.tags.map((e, index) => (
            <HousingTags key={index} tags={e} />
          ))}
        </ul>
        <HousingRate rate={housing.rating} />
      </div>
      <HousingCollapse
        id={housing.id}
        description={housing.description}
        equipments={housing.equipments}
      />
    </div>
  )
}
export default Housing
