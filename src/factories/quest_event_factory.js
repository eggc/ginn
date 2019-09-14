import questEvents from '../seeds/quest_events'
import QuestEvent from '../models/quest_event'
import Factory from './factory'
import ResultFactory from './quest_event_result_factory'

class QuestEventFactory extends Factory {
  attributes(id) {
    const [resultIds, ...seed] = this.findSeed(id)
    const result = resultIds.map((id)=>ResultFactory.create(id))
    return [result, ...seed]
  }
}

export default new QuestEventFactory(questEvents, QuestEvent)
