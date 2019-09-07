import questEvents from '../store/quest_events'

export default {
  create: (quest) => {
    const sections = []
    sections.push({
      title: "開始",
      body: quest.location.name + "の探検"
    })

    questEvents.forEach((questEvent) => {
      const result = questEvent.results[Math.floor(questEvent.results.length * Math.random())]
      sections.push(questEvent)
      sections.push(result)
    })

    sections.push({
      title: "終了",
      body: quest.location.name + "の冒険を終えた。"
    })

    sections.forEach((section, i) => section.id = i)

    return sections
  }
}
