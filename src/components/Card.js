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
        <div className="card-basic-info">
          <h3>{name}</h3>
          <span>
            {status}
            {' '}
            -
            {' '}
            {gender}
          </span>
        </div>
        <div className="card-info">
          <span>Last known location:</span>
          <br />
          <span>{location}</span>
        </div>
        <div className="card-info">
          <span>What species:</span>
          <br />
          <span>{species}</span>
        </div>
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
