import _ from 'lodash'

export default class Factory {
  constructor(seeds, targetClass) {
    this.instances = {}
    this.seeds = seeds
    this.className = targetClass.name
    this.targetClass = targetClass
  }

  findSeed(id) {
    const seed = this.seeds[id]
    if (seed) {
      return seed
    } else {
      throw new Error(`${this.className} seed is not found: ${id}`)
    }
  }

  attributes(id) {
    return this.findSeed(id)
  }

  create(id) {
    if(!this.instances[id]) {
      const attrs = this.attributes(id)
      this.instances[id] = new this["targetClass"](id, ...attrs)
    }

    return this.instances[id]
  }

  randomPick (size = 1, filterIds = []) {
    const ids = _.times(this.seeds.length, (i) => i)
    const filteredIds = _.difference(ids, filterIds)
    const targets = _.shuffle(filteredIds).slice(0, size)
    const results = targets.map((id)=>this.create(id))
    return (size == 1) ? results[0] : results
  }
}
