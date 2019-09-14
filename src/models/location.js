import Model from './model'
export default class Location extends Model {
  constructor(id, name, description) {
    super(id)
    this.name = name
    this.description = description
  }
}
