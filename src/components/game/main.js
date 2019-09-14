import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import RootPage from './root'
import SetupPage from './setup_page'
import HomePage from './home_page'
import NewcomerPage from './newcomer_page'
import Nav from '../nav'

import gameStore from '../../stores/game_store'

export default () => {
  const [game, setGame] = React.useState(gameStore.load())
  const appendCharacter = (character) => {
    game.characters.push(character)
    gameStore.save(game)
    setGame(gameStore.load())
  }

  return (
    <React.Fragment>
      <Router>
        <Nav resourceName="game" paths={["setup", "home", "newcomer"]}></Nav>
        <Switch>
          <Route exact path="/game" render={(routeProps) =>
            <RootPage history={routeProps.history}/>}
          />
          <Route exact path="/game/setup" render={(routeProps) =>
            <SetupPage history={routeProps.history}
                               onComplete={appendCharacter}
                               hero={game.createHero()} />}
          />
          <Route exact path="/game/home" render={(routeProps) =>
            <HomePage history={routeProps.history} game={game} />
          } />
          <Route exact path="/game/newcomer">
            <NewcomerPage onComplete={appendCharacter} newcomer={game.createNewcomer()} />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  )
}
