// プレイヤーの状態を表すクラス
export default class Game {
  constructor(round, money, characters, quest) {
    this.round = round
    this.money = money
    this.characters = characters
    this.quest = quest
  }
}
