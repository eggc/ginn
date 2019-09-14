import questEvents from '../seeds/quest_events'
import QuestEvent from '../models/quest_event'

class QuestEventFactory {
  create(id) {
    const seed = questEvents[id]
    if (seed) {
      return new QuestEvent(id, ...seed)
    } else {
      throw new Error(`QuestEvent is not found: ${id}`)
    }
  }
}

const factory = new QuestEventFactory()
export default factory
