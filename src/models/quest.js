import _ from 'lodash'
import Model from './model'

export default class Quest extends Model {
  constructor(id, location, events, name, description, results) {
    super(id)
    this.location = location
    this.events = events
    this.name = name
    this.description = description
    this.results = results
  }

  setCharacters (characters) {
    this.characters = characters
  }

  attributeNames() {
    return ['id', 'name', 'description', 'locationName', 'eventNames']
  }

  locationName() {
    return this.location.name
  }

  eventNames() {
    return this.events.map((e)=>e.name)
  }

  resolve() {
    this.results = this.events.map((e)=>_.sample(e.results))
  }
}
