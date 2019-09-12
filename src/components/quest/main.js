import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom"

import Nav from '../nav'
import SetupPage from './setup_page'
import ProgressPage from './progress_page'
import EvaluatePage from './evaluate_page'

import gameStore from '../../stores/game_store'
import questStore from '../../stores/quest_store'
import SectionFactory from '../../factories/sections_factory'

export default () => {
  console.debug("render main")
  const [quest, setQuest] = React.useState(questStore.load())
  const [game, setGame] = React.useState(gameStore.load())
  const onNext = (q) => {
    questStore.save(q)
    setQuest(questStore.load())
  }
  const onComplete = (result) => {
    game.round += 1
    game.money += result.money
    game.characters.forEach((c)=>{
      if ("クエストに参加していたら") {
        c.exp += result.exp
      }
    })
    gameStore.save(game)
  }

  return (
    <React.Fragment>
      <Router>
        <Nav resourceName="quest" paths={["setup", "progress", "evaluate"]}></Nav>

        <Switch>
          <Route path="/quest/setup">
            <SetupPage onNext={onNext} characters={game.characters}/>
          </Route>
          <Route path="/quest/progress" render={(routeProps) =>
            <ProgressPage history={routeProps.history} sections={SectionFactory.create(quest)}/>}
          />
          <Route path="/quest/evaluate">
            <EvaluatePage results={quest.results} onComplete={onComplete} />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  )
}
