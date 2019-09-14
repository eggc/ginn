export default class Factory {
  constructor(seeds, targetClass) {
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
    const attrs = this.attributes(id)
    return new this["targetClass"](id, ...attrs)
  }
}
