import React from 'react'

import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'

import Headline from '../Headline/Headline'
import Menu from '../Menu/Menu'
import Music from '../Music/Music'

const App = () => (
  <div>
    <BrowserRouter>
      <Headline />
      <Menu />
      <Switch>
        <Route exact path='/' />
        <Route exact path='/music'>
          <Music />
        </Route>
        <Redirect from='*' to='/' />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
