import {questEvents} from '../seeds'
import _ from 'lodash'

class SectionFactory {
  create(quest) {
    this.quest = quest

    const sections = []
    sections.push(this._createFirstSection(quest))

    _.times(quest.events.length, (i) => {
      sections.push(this._createEventSection(quest.events[i]))
      sections.push(this._createResultSection(quest.results[i]))
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

  _createResultSection(result) {
    return {
      title: result.title,
      body: result.body,
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
