import locations from '../seeds/locations'
import Location from '../models/location'

class LocationFactory {
  create(id) {
    const seed = locations[id]
    if (seed) {
      return new Location(id, ...seed)
    } else {
      throw new Error(`Location is not found: ${id}`)
    }
  }
}

const factory = new LocationFactory()
export default factory
