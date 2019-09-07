import {locations, characters, spices, questEvents} from '../seeds/'
import _ from 'lodash'

class QuestStore {
  load() {
    const questBase = JSON.parse(localStorage.getItem("quest"))
    const quest = {
      location: locations[questBase.location],
      characters: questBase.characters.map((c) => characters[c]),
      spice: spices[questBase.spice],
      events: questBase.events.map((e) => questEvents[e]),
      results: this._restoreResult(questBase)
    }
    return quest
  }

  save(quest) {
    const events = _.shuffle(questEvents).slice(2)
    quest.events = events.map((e) => e.id)
    quest.results = events.map((e) => _.sample(e.results).id)
    localStorage.setItem("quest", JSON.stringify(quest))
  }

  _restoreResult(questBase) {
    return questBase.events.map((e,i) => {
      const r = questBase.results[i]
      return questEvents[e].results[r]
    })
  }
}

export default new QuestStore()
