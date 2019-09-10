import React from 'react'
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Typography from '@material-ui/core/Typography'

export default () => {
  return (
    <React.Fragment>
      <Router>
        <Typography>
          game /
          <Link to="/">root</Link> /
          <Link to="/game/setup">setup</Link> /
        </Typography>

        <Switch>
          <Route path="/game/setup">setup</Route>
        </Switch>
      </Router>
    </React.Fragment>
  )
}
