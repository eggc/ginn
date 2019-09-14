import CharacterFactory from '../factories/character_factory'

class CharacterStore {
  serialize(character) {
    return [
      character.id,
      character.exp
    ]
  }

  deserialize(serial) {
    const [id, exp] = serial
    const character = CharacterFactory.create(id)
    character.exp = exp
    return character
  }
}

export default new CharacterStore()
