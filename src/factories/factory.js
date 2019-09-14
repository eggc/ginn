export default class Factory {
  constructor(seeds, targetClass) {
    this.seeds = seeds
    this.className = targetClass.constructor.name
    this.targetClass = targetClass
  }

  create(id) {
    const seed = this.seeds[id]
    if (seed) {
      return new this["targetClass"](id, ...seed)
    } else {
      throw new Error(`${this.className} is not found: ${id}`)
    }
  }
}
