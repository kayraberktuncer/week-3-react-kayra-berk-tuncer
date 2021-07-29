import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('component tests', () => {
  describe('Home page tests', () => {
    test('should render header text', () => {
      render(<App />)
      const headerElement = screen.getByText('The Rick and Morty API')
      expect(headerElement).not.toBeNull()
    })
  })
})
