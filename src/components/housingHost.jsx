import '../styles/components/housingHost/housingHost.css'

const HousingHost = (props) => {
  return (
    <div className="housingHost">
      <div className="housingHost__title">
        <h1 className="housingHost__title__h1">{props.title}</h1>
        <p className="housingHost__title__city">{props.location}</p>
      </div>
      <div className="housingHost__identity">
        <p className="housingHost__identity__name">{props.name}</p>
        <img className="housingHost__identity__img" src={props.imgSrc} alt="" />
      </div>
    </div>
  )
}
export default HousingHost
