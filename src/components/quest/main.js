import React from 'react'
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom"
import SetupPage from './setup_page'
import ProgressPage from './progress_page'
import EvaluatePage from './evaluate_page'

import questStore from '../../stores/quest_store'
import SectionFactory from '../../factories/sections_factory'

import Typography from '@material-ui/core/Typography'

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
        <Typography>
          quest /
          <Link to="/">root</Link> /
          <Link to="/quest/setup">setup</Link> /
          <Link to="/quest/progress/">progress</Link> /
          <Link to="/quest/evaluate/">evaluate</Link>
        </Typography>

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
