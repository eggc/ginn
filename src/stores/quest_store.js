import QuestFactory from '../factories/quest_factory'
import CharacterStore from './character_store'

class QuestStore {
  serialize(quest) {
    return [
      quest.id,
      quest.characters.map((c)=>CharacterStore.serialize(c))
    ]
  }

  deserialize(serial) {
    if (!serial) { return }

    const [id, charactersSerial] = serial
    const quest = QuestFactory.create(id)
    quest.characters = charactersSerial.map((c)=>CharacterStore.deserialize(c))
    return quest
  }
}

export default new QuestStore()
