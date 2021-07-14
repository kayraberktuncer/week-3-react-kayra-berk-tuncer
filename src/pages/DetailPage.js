/* eslint-disable quotes */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

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

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => setCharacter(data))
  }, [id])

  useEffect(() => {
    if (character.episode) {
      axios
        .all([...character.episode.map((episode) => axios.get(episode))])
        .then((result) => setEpisodes(result.map((episode) => episode.data)))
    }
  }, [character])

  return (
    <div>
      <img src={character.image} alt={character.name} />
      <h1>{character.name}</h1>
      <p>{character.gender}</p>
      <p>{character.species}</p>
      <p>{character.status}</p>
      <p>{character.location.name}</p>
      <h3>Episodes</h3>
      {episodes.slice(0, 5).map((episode) => (
        <p>{episode.name}</p>
      ))}
    </div>
  )
}
