import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import RootPage from './root'
import SetupPage from './setup_page'
import HomePage from './home_page'
import NewcomerPage from './newcomer_page'
import Nav from '../nav'

import GameStore from '../../stores/game_store'
import CharacterFactory from '../../factories/character_factory'

export default () => {
  const [game, setGame] = React.useState(GameStore.load())
  const newcomer = CharacterFactory.randomPick(1, game.characters.map((c)=>c.id))
  const appendCharacter = (character) => {
    game.characters.push(character)
    GameStore.save(game)
    setGame(game)
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
                               hero={CharacterFactory.create(0)} />}
          />
          <Route exact path="/game/home" render={(routeProps) =>
            <HomePage history={routeProps.history} game={game} />
          } />
          <Route exact path="/game/newcomer">
            <NewcomerPage onComplete={appendCharacter}
                          newcomer={newcomer} />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  )
}
