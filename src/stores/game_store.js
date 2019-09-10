import {characters} from '../seeds/'
import _ from 'lodash'

class GameStore {
  load() {
    const gameBase = JSON.parse(localStorage.getItem("game"))
    if(!gameBase) { return {} }
    const game = {
      characters: gameBase.characters.map((c) => characters[c])
    }
    console.debug("load game", game)
    return game
  }

  save(game) {
    console.debug("save game", game)
    localStorage.setItem("game", JSON.stringify(game))
  }
}

export default new GameStore()
