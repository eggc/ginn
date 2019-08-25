import React from 'react'
import CharacterButton from './character_button'

export default ({characters, onChange}) => {
  const [activeCharacterIds, setActiveCharacterIds] = React.useState({})

  const renderCharacter = (character) => {

    const onClick = (id) => {
      const newState = Object.assign({}, activeCharacterIds)
      newState[id] = !activeCharacterIds[id]
      setActiveCharacterIds(newState)
      onChange(newState)
    }

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
