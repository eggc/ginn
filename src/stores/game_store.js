import {characters} from '../seeds/'
import _ from 'lodash'

class GameStore {
  load() {
    const gameBase = this._initGameBase()
    const game = this._createGame(gameBase)
    console.debug("load game", game)
    return game
  }

  save(game) {
    const exps = {}
    game.characters.forEach((c)=> exps[c.id] = c.exp)

    const gameBase = {
      money: game.money,
      characters: game.characters.map((c)=>c.id),
      exps: exps
    }
    console.debug("save game", gameBase)
    localStorage.setItem("game", JSON.stringify(gameBase))
  }

  _initGameBase() {
    const gameBase = JSON.parse(localStorage.getItem("game")) || {}
    gameBase.characters = gameBase.characters || []
    gameBase.exps = gameBase.exps || {}
    gameBase.money = gameBase.money || 0
    return gameBase
  }

  _createGame(gameBase) {
    return {
      money: gameBase.money,
      characters: gameBase.characters.map((c) => {
        const character = characters[c]
        character.exp = gameBase.exps[c] || 0
        return character
      })
    }
  }
}

export default new GameStore()
