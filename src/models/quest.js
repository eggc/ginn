import Model from './model'

export default class Quest extends Model {
  constructor(id, location, events, name, description) {
    super()
    this.id = id
    this.location = location
    this.events = events
    this.name = name
    this.description = description
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
}
