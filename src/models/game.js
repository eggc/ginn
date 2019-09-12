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
    return this.createNewcomers(1)[0]
  }

  createNewcomers(size) {
    const currentCharacterIds = this.characters.map((c)=>c.id)
    const newcomerIds = Character.findNewcomerIds(currentCharacterIds, size)
    const newcomers = newcomerIds.map((id)=>{
      const exp = _.random(10, 25) * this.round
      return new Character(id, exp)
    })
    return newcomers
  }
}
