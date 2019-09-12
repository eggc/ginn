import React from 'react'
import CharacterButton from './character_button'


export default ({characters, onChange, multiple}) => {
  const [activeCharacterIds, setActiveCharacterIds] = React.useState({})
  multiple = multiple === undefined ? true : multiple

  const onClick = (id) => {
    let newState

    if(multiple) {
      newState = Object.assign({}, activeCharacterIds)
      newState[id] = !activeCharacterIds[id]
      setActiveCharacterIds(newState)
    } else {
      newState = {}
      newState[id] = true
      setActiveCharacterIds(newState)
    }

    const ids = []
    Object.keys(newState).forEach((key) => {
      if(newState[key]){
        ids.push(key)
      }
    })

    onChange(ids)
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
