import questEvents from '../seeds/quest_events'
import QuestEvent from '../models/quest_event'
import Factory from './factory'

const factory = new Factory(questEvents, QuestEvent)
export default factory
