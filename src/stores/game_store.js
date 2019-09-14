import Game from '../models/game'
import CharacterStore from './character_store'
import QuestStore from './quest_store'

class GameStore {
  load() {
    const serial = JSON.parse(localStorage.getItem("game"))
    if(serial) {
      const game = this.deserialize(serial)
      console.debug("load game", game)
      return game
    } else {
      return new Game(0, 0, [])
    }
  }

  save(game) {
    console.debug("save game", game)
    const serial = this.serialize(game)
    localStorage.setItem("game", JSON.stringify(serial))
  }

  serialize(game) {
    return [
      game.round,
      game.money,
      game.characters.map((c)=>CharacterStore.serialize(c)),
      QuestStore.serialize(game.quest)
    ]
  }

  deserialize(serial) {
    const [round, money, charactersSerial, questSerial] = serial
    const characters = charactersSerial.map((c)=>CharacterStore.deserialize(c))
    const quest = QuestStore.deserialize(questSerial)
    return new Game(round, money, characters, quest)
  }
}

export default new GameStore()
