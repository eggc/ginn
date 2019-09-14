import _ from 'lodash'

// プレイヤーの状態を表すクラス
export default class Game {
  constructor(round, money, characters, quest) {
    this.round = round
    this.money = money
    this.characters = characters
    this.quest = quest
  }

  evaluateQuest() {
    const exp = this.quest.unitExp()
    this.quest.characters.forEach((c)=>c.exp += exp)
    this.money += this.quest.totalMoney()
    this.round += 1
  }
}
