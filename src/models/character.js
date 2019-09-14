import _ from 'lodash'
import Model from './model'

export default class Character extends Model {
  constructor(id, title, name, profile, basePower, exp) {
    super(id)
    this.title = title
    this.name = name
    this.profile = profile
    this.basePower = Number(basePower)
    this.exp = Number(exp)
  }

  power() {
    return ((this.exp + this.basePower)/10).toFixed(1)
  }

  fullName() {
    return this.title + this.name
  }
}
