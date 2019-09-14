import React from 'react'
import theme from './theme'
import Nav from './nav'
import Quest from './quest/main'
import Game from './game/main'
import Test from './test/main'

import { ThemeProvider } from '@material-ui/styles'
import { HashRouter as Router, Route, Switch } from "react-router-dom"

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Nav paths={["game", "quest", "test"]} />

        <Switch>
          <Route path="/quest/"><Quest /></Route>
          <Route path="/game/"><Game /></Route>
          <Route path="/test/"><Test /></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}
