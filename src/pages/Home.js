import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NotResult from '../components/NotResult'
import Card from '../components/Card'
import Search from '../components/Search'
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
      <Search handleChange={handleChange} setPage={setPage} />
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
