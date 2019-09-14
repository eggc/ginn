import _ from 'lodash'

class SectionFactory {
  create(quest) {
    this.quest = quest

    const sections = []
    sections.push(this._createFirstSection(quest))

    quest.events.forEach((event) => {
      sections.push(this._createEventSection(event))
      sections.push(this._createResultSection(event.pickResult()))
    })

    sections.push(this._createLastSection(quest))
    sections.forEach((section, i) => section.id = i)
    return sections
  }

  _createFirstSection() {
    return {
      title: "開始",
      body: this.quest.name,
      color: "secondary"
    }
  }

  _createEventSection(questEvent) {
    return {
      title: questEvent.name,
      body: questEvent.body,
      color: "inherit"
    }
  }

  _createResultSection(result) {
    return {
      title: result.name,
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
