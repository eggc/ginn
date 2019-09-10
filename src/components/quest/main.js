import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom"

import Nav from '../nav'
import SetupPage from './setup_page'
import ProgressPage from './progress_page'
import EvaluatePage from './evaluate_page'

import questStore from '../../stores/quest_store'
import SectionFactory from '../../factories/sections_factory'

export default () => {
  console.debug("render main")
  const [quest, setQuest] = React.useState(questStore.load())
  const sections = SectionFactory.create(quest)
  const onNext = (q) => {
    questStore.save(q)
    setQuest(questStore.load())
  }

  return (
    <React.Fragment>
      <Router>
        <Nav resourceName="quest" paths={["setup", "progress", "evaluate"]}></Nav>

        <Switch>
          <Route path="/quest/setup"><SetupPage onNext={onNext} /></Route>
          <Route path="/quest/progress" render={(routeProps) =>
            <ProgressPage history={routeProps.history} sections={sections}/>}
          />
          <Route path="/quest/evaluate"><EvaluatePage results={quest.results} /></Route>
        </Switch>
      </Router>
    </React.Fragment>
  )
}
