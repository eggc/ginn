import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Nav from '../nav'
import Page from '../page'
import SeedTable from './seed_table'

import LocationFactory from "../../factories/location_factory"
import QuestEventResultFactory from "../../factories/quest_event_result_factory"
import QuestEventFactory from "../../factories/quest_event_factory"

export default () => {
  return (
    <Router>
      <Nav resourceName="test" paths={["factories", "locations", "quest_event_results", "quest_events"]}></Nav>
      <Switch>
        <Route path="/test/locations"><Page fullWidth><SeedTable factory={LocationFactory} /></Page></Route>
        <Route path="/test/quest_event_results"><Page fullWidth><SeedTable factory={QuestEventResultFactory} /></Page></Route>
        <Route path="/test/quest_events"><Page fullWidth><SeedTable factory={QuestEventFactory} /></Page></Route>
      </Switch>
    </Router>
  )
}
