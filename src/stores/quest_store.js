import locations from '../store/locations'
import characters from '../store/characters'
import spices from '../store/spices'

export default {
  load: () => {
    const questBase = JSON.parse(localStorage.getItem("quest"))
    const quest = {
      location: locations[questBase.location],
      characters: questBase.characters.map((c) => characters[c]),
      spice: spices[questBase.spice]
    }
    return quest
  },

  save: (quest) => {
    quest.events = [0,1]
    quest.results = [Math.floor(Math.random()*5), Math.floor(Math.random()*5)]
    localStorage.setItem("quest", JSON.stringify(quest))
  }
}
