import {characters} from '../seeds/'
import _ from 'lodash'

// プレイヤーの状態を表すクラス
export default class Game {
  constructor(round, money, characters) {
    this.round = round
    this.money = money
    this.characters = characters
  }

  createNewcomer() {
    const newcomers = characters.filter((c)=> !this.characters.includes(c))
    const newcomer = _.sample(newcomers)
    newcomer.exp = (_.random(1, 2.5) * this.round).toFixed(1)
    return newcomer
  }
}
