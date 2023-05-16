import React from 'react'
import './styles/app.css'

import { Route, Switch, Redirect } from 'react-router-dom'
import Main from './pages/Main'
import Search from './pages/Search'
import Prices from './pages/Prices'

function App () {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={ () => <Redirect to="/main" /> } />
        <Route exact path="/main" component={ Main } />
        <Route exact path="/search" component={ Search } />
        <Route exact path="/products/compare" component={ Prices } />
      </Switch>
    </div>
  )
}

export default App
