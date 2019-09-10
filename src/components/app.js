import React from 'react'
import theme from './theme'
import Quest from './quest/main'
import Game from './game/main'

import { ThemeProvider } from '@material-ui/styles'
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom"
import Typography from '@material-ui/core/Typography'

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Typography>
          デバッグ：
          <Link to="/">root</Link> /
          <Link to="/game/">game</Link> /
          <Link to="/quest/">quest</Link> /
        </Typography>

        <Switch>
          <Route path="/quest/"><Quest /></Route>
          <Route path="/game/"><Game /></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}
