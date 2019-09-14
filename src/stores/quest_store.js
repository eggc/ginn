import QuestFactory from '../factories/quest_factory'
import CharacterStore from './character_store'
import QuestEventResultStore from './quest_event_result_store'

class QuestStore {
  serialize(quest) {
    if(!quest) { return }

    return [
      quest.id,
      quest.characters.map((c)=>CharacterStore.serialize(c)),
      quest.results.map((r)=>QuestEventResultStore.serialize(r))
    ]
  }

  deserialize(serial) {
    if (!serial) { return }

    const [id, charactersSerial, resultsSerial] = serial
    const quest = QuestFactory.create(id)
    quest.characters = charactersSerial.map((c)=>CharacterStore.deserialize(c))
    quest.results = resultsSerial.map((r)=>QuestEventResultStore.deserialize(r))
    return quest
  }
}

export default new QuestStore()
