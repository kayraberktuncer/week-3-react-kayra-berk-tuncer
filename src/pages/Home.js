import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NotResult from '../components/NotResult'
import Card from '../components/Card'

export default function Home() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character').then(({ data }) => {
      setCharacters([...characters, ...data.results])
    })
  }, [])

  return (
    <>
      <h1>Home</h1>
      <div className="content">
        {characters ? (
          characters.map((character) => (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              gender={character.gender}
              species={character.species}
              status={character.status}
              image={character.image}
              location={character.location.name}
            />
          ))
        ) : (
          <NotResult />
        )}
      </div>
    </>
  )
}