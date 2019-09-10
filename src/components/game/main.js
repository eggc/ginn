import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import RootPage from './root'
import SetupPage from './setup_page'
import Nav from '../nav'

export default () => {
  return (
    <React.Fragment>
      <Router>
        <Nav resourceName="game" paths={["setup"]}></Nav>
        <Switch>
          <Route exact path="/game" render={(routeProps) =>
            <RootPage history={routeProps.history}/>}
          />
          <Route exact path="/game/setup"><SetupPage /></Route>
        </Switch>
      </Router>
    </React.Fragment>
  )
}
