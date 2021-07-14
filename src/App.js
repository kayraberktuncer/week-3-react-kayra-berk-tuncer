import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import DetailPage from './pages/DetailPage'

export default function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/:id">
            <DetailPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
