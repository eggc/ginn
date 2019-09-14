import quests from '../seeds/quests'
import Quest from '../models/quest'
import Factory from './factory'
import QuestEventFactory from './quest_event_factory'
import LocationFactory from './location_factory'

class QuestFactory extends Factory {
  attributes(id) {
    const [locationSeed, eventSeeds, ...seed] = this.findSeed(id)
    const location = LocationFactory.create(locationSeed)
    const events = eventSeeds.map((s)=>QuestEventFactory.create(s))
    return [location, events, ...seed]
  }
}

export default new QuestFactory(quests, Quest)
