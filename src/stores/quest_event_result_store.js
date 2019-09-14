import QuestEventResultFactory from '../factories/quest_event_result_factory'

class QuestEventResultStore {
  serialize(result) {
    return result.id
  }

  deserialize(id) {
    return QuestEventResultFactory.create(id)
  }
}

export default new QuestEventResultStore()
