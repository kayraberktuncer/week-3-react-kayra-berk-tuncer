import React from 'react'
import PropTypes from 'prop-types'

export default function PaginationButton({ setPage }) {
  function handleClick(e) {
    setPage(e.target.value)
    e.preventDefault()
  }

  return (
    <div className="pagination-buttons">
      <button type="button" value="1" onClick={handleClick}>
        1
      </button>
      <button type="button" value="2" onClick={handleClick}>
        2
      </button>
      <button type="button" value="3" onClick={handleClick}>
        3
      </button>
      <button type="button" value="4" onClick={handleClick}>
        4
      </button>
      <button type="button" value="5" onClick={handleClick}>
        5
      </button>
    </div>
  )
}

PaginationButton.propTypes = {
  setPage: PropTypes.func.isRequired,
}
