import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NotResult from '../components/NotResult'
import Card from '../components/Card'

export default function Home() {
  const [characters, setCharacters] = useState([])
  const [filter, setFilter] = useState({ status: '', gender: '' })

  useEffect(() => {
    const query = `?${filter.status ? `status=${filter.status}` : ''}${
      filter.gender ? `&gender=${filter.gender}` : ''
    }`

    axios
      .get(`https://rickandmortyapi.com/api/character${query}`)
      .then(({ data }) => {
        setCharacters([...characters, ...data.results])
      })
  }, [filter])

  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value })
    setCharacters([])
    e.preventDefault()
  }

  return (
    <>
      <h1>Home</h1>
      <div>
        <select name="status" onChange={handleChange}>
          <option value="">Sort by status</option>
          <option value="dead">Dead</option>
          <option value="alive">Alive</option>
          <option value="unknown">Unknown</option>
        </select>
        <select name="gender" onChange={handleChange}>
          <option value="">Sort by gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className="content">
        {characters ? (
          characters.map((character) => (
            <Link key={character.id} to={`/${character.id}`}>
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
            </Link>
          ))
        ) : (
          <NotResult />
        )}
      </div>
    </>
  )
}
