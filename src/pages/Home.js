import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NotResult from '../components/NotResult'
import Card from '../components/Card'
import PaginationButton from '../components/Buttons/PaginationButton'
import { getCharacters } from '../api/service'

export default function Home() {
  const [characters, setCharacters] = useState([])
  const [filter, setFilter] = useState({ status: '', gender: '' })
  const [page, setPage] = useState('1')

  useEffect(() => {
    const query = `?page=${page}${
      filter.status ? `&status=${filter.status}` : ''
    }${filter.gender ? `&gender=${filter.gender}` : ''}`

    getCharacters(characters, setCharacters, query)
  }, [filter])

  function handleChange(e) {
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
        <PaginationButton setPage={setPage} />
      </div>
      <div className="content">
        {characters.length > 0 ? (
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
