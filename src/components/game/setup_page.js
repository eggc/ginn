import React from 'react'
import sections from '../../seeds/game_events'
import SectionsPage from '../shared/sections_page'

export default ({onComplete, hero, history}) => {
  const onClick = (e) => {
    onComplete(hero)
    history.push("/game/home")
  }

  return <SectionsPage sections={sections} onComplete={onClick} />
}
