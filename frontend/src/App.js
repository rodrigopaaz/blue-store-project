import React from 'react'
import './styles/app.css'

import { Route, Switch, Redirect } from 'react-router-dom'
import Main from './pages/Main'
import Search from './pages/Search'
import Prices from './pages/Prices'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Favorite from './pages/Favorite'

function App () {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={ () => <Redirect to="/main" /> } />
        <Route exact path="/main" component={ Main } />
        <Route exact path="/search" component={ Search } />
        <Route exact path="/products/compare" component={ Prices } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/cart" component={ Cart } />
        <Route exact path="/favorites" component={ Favorite } />
      </Switch>
    </div>
  )
}

export default App
