import React from 'react'
import CharacterButton from './character_button'

export default ({characters, onChange}) => {
  const [activeCharacterId, setActiveCharacterId] = React.useState(0)

  const renderCharacter = (character) => {
    return (
      <CharacterButton
        key={character.id}
        character={character}
        onClick={(id) => { setActiveCharacterId(id); onChange(id) } }
        active={character.id === activeCharacterId} />
    )
  }

  return <div>{characters.map(renderCharacter)}</div>
}
