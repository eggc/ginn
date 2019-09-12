import {characters} from '../seeds/'
import _ from 'lodash'

export default class Character {
  constructor(id, exp=0) {
    const characterSeed = characters[id]
    this.id = id
    this.title = characterSeed.title
    this.name = characterSeed.name
    this.description = characterSeed.description
    this.basePower = Number(characterSeed.power)
    this.exp = Number(exp)
  }

  power() {
    return ((this.exp + this.basePower)/10).toFixed(1)
  }

  fullName() {
    return this.title + this.name
  }
}

Character.findNewcomerId = (excludeIds) => {
  return this.findNewcomerIds(excludeIds, 1)[0]
}
Character.findNewcomerIds = (excludeIds, size) => {
  const characterIds = characters.map((c)=>c.id)
  const newcomers = _.difference(characterIds, excludeIds)
  return _.shuffle(newcomers).slice(0, size)
}
