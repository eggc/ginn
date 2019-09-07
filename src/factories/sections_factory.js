import questEvents from '../store/quest_events'

export default {
  create: (quest) => {
    const sections = []
    sections.push({
      title: "開始",
      body: quest.location.name + "の探検",
      color: "secondary"
    })

    questEvents.forEach((questEvent) => {
      questEvent.color = "inherit"

      const result = questEvent.results[Math.floor(questEvent.results.length * Math.random())]
      const pickedCharacter = quest.characters[Math.floor(quest.characters.length * Math.random())]
      result.body = result.body.replace(/"X"/g, pickedCharacter.name)
      result.color = "primary"
      sections.push(questEvent)
      sections.push(result)
    })

    sections.push({
      title: "終了",
      body: quest.location.name + "の冒険を終えた。",
      color: "secondary"
    })

    sections.forEach((section, i) => section.id = i)

    return sections
  }
}
