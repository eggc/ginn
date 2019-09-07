import {questEvents} from '../seeds'

class SectionFactory {
  create(quest) {
    this.quest = quest

    const sections = []
    sections.push(this._createFirstSection(quest))

    questEvents.forEach((questEvent) => {
      sections.push(this._createEventSection(questEvent))
      sections.push(this._createResultSection(questEvent))
    })

    sections.push(this._createLastSection(quest))
    sections.forEach((section, i) => section.id = i)
    return sections
  }

  _createFirstSection() {
    return {
      title: "開始",
      body: this.quest.location.name + "の探検",
      color: "secondary"
    }
  }

  _createEventSection(questEvent) {
    return {
      title: questEvent.title,
      body: questEvent.body,
      color: "inherit"
    }
  }

  _createResultSection(questEvent) {
    const result = questEvent.results[Math.floor(questEvent.results.length * Math.random())]
    const pickedCharacter = this.quest.characters[Math.floor(this.quest.characters.length * Math.random())]

    return {
      title: result.title,
      body: result.body.replace(/"X"/g, pickedCharacter.name),
      color: "primary"
    }
  }

  _createLastSection() {
    return {
      title: "終了",
      body: this.quest.location.name + "の冒険を終えた。",
      color: "secondary"
    }
  }
}

export default new SectionFactory()
