import React from 'react'

export default function Card({
  id,
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
        <span>{gender}</span>
        <span>{species}</span>
        <span>{status}</span>
        <span>{location}</span>
      </div>
    </div>
  )
}
