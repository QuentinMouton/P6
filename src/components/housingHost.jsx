import '../styles/components/housingHost/housingHost.css'

const HousingHost = (props) => {
  return (
    <div className="housing__locationTags">
      <div className="housing__locationTags__title">
        <h1 className="housing__locationTags__title__h1">{props.title}</h1>
        <p className="housing__locationTags__title__city">{props.location}</p>
      </div>
      <ul className="housing__locationTags__tags">
        {props.tags.map((e) => (
          <p className="housing__locationTags__tags__list">{e}</p>
        ))}
      </ul>
    </div>
  )
}
export default HousingHost
