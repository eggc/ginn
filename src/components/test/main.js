import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Nav from '../nav'
import Factories from './factories'

export default () => {
  return (
    <Router>
      <Nav resourceName="test" paths={["factories"]}></Nav>
      <Switch>
        <Route path="/test/factories"><Factories /></Route>
      </Switch>
    </Router>
  )
}
