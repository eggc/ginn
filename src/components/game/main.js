import React from 'react'
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Typography from '@material-ui/core/Typography'
import RootPage from './root'
import Nav from '../nav'

export default () => {
  return (
    <React.Fragment>
      <Router>
        <Nav resourceName="game" paths={["setup"]}></Nav>
        <Switch>
          <Route exact path="/game/"><RootPage onClick={()=>{}} /></Route>
          <Route path="/game/setup">setup</Route>
        </Switch>
      </Router>
    </React.Fragment>
  )
}
