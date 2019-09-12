import {characters} from '../seeds/'
import Game from '../models/game'

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
      round: game.round,
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
    gameBase.round = gameBase.round || 1
    return gameBase
  }

  _createGame(gameBase) {
    return new Game(
      gameBase.round,
      gameBase.money,
      gameBase.characters.map((c) => {
        const character = characters[c]
        character.exp = gameBase.exps[c] || 0
        return character
      })
    )
  }
}

export default new GameStore()
