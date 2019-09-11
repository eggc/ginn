import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import RootPage from './root'
import SetupPage from './setup_page'
import HomePage from './home_page'
import Nav from '../nav'

import gameStore from '../../stores/game_store'

export default () => {
  const [game, setGame] = React.useState(gameStore.load())
  const onCompleteSetup = (character) => {
    gameStore.saveFirstCharacter(character)
    setGame(gameStore.load())
  }

  return (
    <React.Fragment>
      <Router>
        <Nav resourceName="game" paths={["setup", "home"]}></Nav>
        <Switch>
          <Route exact path="/game" render={(routeProps) =>
            <RootPage history={routeProps.history}/>}
          />
          <Route exact path="/game/setup"><SetupPage onComplete={onCompleteSetup} /></Route>
          <Route exact path="/game/home"><HomePage game={game} /></Route>
        </Switch>
      </Router>
    </React.Fragment>
  )
}
