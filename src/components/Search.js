import React from 'react'
import PropTypes from 'prop-types'
import PaginationButton from './Buttons/PaginationButton'

export default function Search({ handleChange, setPage }) {
  return (
    <div className="search-bar">
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
  )
}
Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
}
