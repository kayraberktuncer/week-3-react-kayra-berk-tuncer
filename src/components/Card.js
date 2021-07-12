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
        <strong>Gender : {gender}</strong>
        <strong>Species : {species}</strong>
        <strong>Status : {status}</strong>
        <strong>Location : {location}</strong>
      </div>
    </div>
  )
}
