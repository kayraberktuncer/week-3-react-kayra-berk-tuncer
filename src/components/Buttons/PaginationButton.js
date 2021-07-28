import React from 'react'
import PropTypes from 'prop-types'

export default function PaginationButton({ page, setPage }) {
  function handleUpperClick() {
    setPage(page + 1)
  }

  return (
    <div className="pagination-buttons">
      <button type="button" value="2" onClick={handleUpperClick}>
        More
      </button>
    </div>
  )
}

PaginationButton.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
}
