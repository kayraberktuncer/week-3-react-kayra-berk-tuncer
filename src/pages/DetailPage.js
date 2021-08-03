/* eslint-disable quotes */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import BackButton from '../components/Buttons/BackButton'
import NotResult from '../components/NotResult'
import { getSingleCharacter, getSingleCharacterEpisodes } from '../api/service'

export default function DetailPage() {
  const { id } = useParams()
  const [character, setCharacter] = useState({
    name: '',
    image: '',
    status: '',
    species: '',
    location: { name: '' },
    episode: [],
  })
  const [episodes, setEpisodes] = useState([])

  useEffect(async () => {
    const result = await getSingleCharacter(id)
    setCharacter(result)
  }, [id])

  useEffect(async () => {
    if (character.episode) {
      const result = await getSingleCharacterEpisodes(character)
      setEpisodes(result.map((episode) => episode.data))
    }
  }, [character])

  return (
    <div className="detail-page">
      <BackButton />
      {character ? (
        <div className="detail-page-content">
          <div className="detail-page-item-image">
            <img src={character.image} alt={character.name} />
          </div>
          <div className="detail-page-item">
            <div className="detail-page-item-info">
              <h1>{character.name}</h1>
              <p>
                {character.status}
                {' '}
                -
                {' '}
                {character.species}
              </p>
              <p>{character.gender}</p>
              <p>{character.location.name}</p>
            </div>
            <div className="detail-page-item-episodes">
              <h3>Episodes</h3>
              {episodes.slice(0, 5).map((episode) => (
                <p>{episode.name}</p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <NotResult />
      )}
    </div>
  )
}
