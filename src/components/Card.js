import React from 'react'
import PropTypes from 'prop-types'

export default function Card({
  name,
  gender,
  species,
  status,
  image,
  location,
}) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <strong>
          Gender :
          {gender}
        </strong>
        <strong>
          Species :
          {species}
        </strong>
        <strong>
          Status :
          {status}
        </strong>
        <strong>
          Location :
          {location}
        </strong>
      </div>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}
