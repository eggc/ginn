import React from 'react'
import CharacterButton from './character_button'

export default ({characters, onChange, multiple}) => {
  const [activeCharacterIds, setActiveCharacterIds] = React.useState({})
  multiple = multiple === undefined ? true : multiple

  const onClick = (character) => {
    let newState

    if(multiple) {
      newState = Object.assign({}, activeCharacterIds)
      newState[character.id] = !activeCharacterIds[character.id]
    } else {
      newState = {}
      newState[character.id] = true
    }

    const activeCharacters = characters.filter((c)=> newState[c.id])
    setActiveCharacterIds(newState)
    onChange(activeCharacters)
  }

  const renderCharacter = (character) => {
    return (
      <CharacterButton
        key={character.id}
        character={character}
        onClick={onClick}
        active={activeCharacterIds[character.id]} />
    )
  }

  return <div>{characters.map(renderCharacter)}</div>
}
