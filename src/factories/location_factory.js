import locations from '../seeds/locations'
import Location from '../models/location'
import Factory from './factory'

const factory = new Factory(locations, Location)
export default factory
