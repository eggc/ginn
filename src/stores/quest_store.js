import {locations, characters, spices, questEvents} from '../seeds/'

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
    quest.events = [0,1]
    quest.results = [Math.floor(Math.random()*5), Math.floor(Math.random()*5)]
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
