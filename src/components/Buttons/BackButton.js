import React from 'react'
import { Link } from 'react-router-dom'

export default function BackButton() {
  return (
    <Link className="back-button" to="/">
      {'<'}
    </Link>
  )
}
