import Model from './model'

export default class QuestEventResult extends Model {
  constructor(id, money, exp, name, body) {
    super(id)
    this.money = money
    this.exp = exp
    this.name = name
    this.body = body
  }
}
