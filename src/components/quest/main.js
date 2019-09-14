import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom"

import Nav from '../nav'
import SetupPage from './setup_page'
import ProgressPage from './progress_page'
import EvaluatePage from './evaluate_page'

import GameStore from '../../stores/game_store'
import QuestFactory from '../../factories/quest_factory'
import SectionFactory from '../../factories/sections_factory'

export default () => {
  const [game, setGame] = React.useState(GameStore.load())
  const [results, setResults] = React.useState(game.quest && game.quest.results)

  const onSetupComplete = (plan) => {
    game.quest = plan.quest
    game.quest.characters = plan.characters
    game.quest.resolve()
    GameStore.save(game)
    setGame(game)
    setResults(game.quest.results)
  }

  const onComplete = () => {
    game.evaluateQuest()
    GameStore.save(game)
  }

  return (
    <React.Fragment>
      <Router>
        <Nav resourceName="quest" paths={["setup", "progress", "evaluate"]}></Nav>

        <Switch>
          <Route path="/quest/setup">
            <SetupPage onNext={onSetupComplete}
                       characters={game.characters}
                       quests={QuestFactory.randomPick(3)} />
          </Route>
          <Route path="/quest/progress" render={(routeProps) =>
            <ProgressPage history={routeProps.history} sections={SectionFactory.create(game.quest)}/>}
          />
          <Route path="/quest/evaluate">
            <EvaluatePage results={results} onComplete={onComplete} />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  )
}
