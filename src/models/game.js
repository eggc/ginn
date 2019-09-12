import _ from 'lodash'
import Character from './character'

// プレイヤーの状態を表すクラス
export default class Game {
  constructor(round, money, characters) {
    this.round = round
    this.money = money
    this.characters = characters
  }

  createNewcomer() {
    const currentCharacterIds = this.characters.map((c)=>c.id)
    const newcomerId = Character.findNewcomerId(currentCharacterIds)
    const exp = (_.random(1, 2.5) * this.round).toFixed(1)

    if(newcomerId >= 0) {
      return new Character(newcomerId, exp)
    } else {
      return null
    }
  }
}
