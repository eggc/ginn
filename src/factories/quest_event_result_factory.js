import seeds from '../seeds/quest_event_results'
import targetClass from '../models/quest_event_result'
import Factory from './factory'

const factory = new Factory(seeds, targetClass)
export default factory
