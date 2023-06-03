import { Link, useParams } from 'react-router-dom'

import '../styles/components/card/card.css'

const Card = (props) => {
  const { idParam } = useParams()

  return (
    <div className="card">
      <Link key={props.id} to={`/housing/${props.id}`}>
        <div className="card__container">
          <img
            className="card__container__img"
            src={props.cover}
            alt={`${props.title} cover`}
          />
        </div>
        <span className="card__text">{props.title}</span>
      </Link>
    </div>
  )
}
export default Card
