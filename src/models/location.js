import Model from './model'
export default class Location extends Model {
  constructor(id, name, description) {
    super()
    this.id = id
    this.name = name
    this.description = description
  }
}
