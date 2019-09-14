export default class Model {
  attributeNames() {
    return Object.keys(this)
  }

  attributes() {
    const result = {}
    this.attributeNames().forEach((key)=>{
      if(typeof this[key] === 'function') {
        result[key] = this[key]()
      } else {
        result[key] = this[key]
      }
    })

    return result
  }
}
