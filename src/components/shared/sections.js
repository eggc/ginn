import React from 'react'
import Section from './section';

export default ({sections, step, onTypingDone}) => {
  const renderSection = (section, i) => {
    const done = step > i
    const color = section.color
    const content = (
      <Section key={i}
               body={section.body}
               done={done}
               color={color}
               onTypingDone={onTypingDone} />
    )

    return <span key={i}>{step >= i && content}</span>
  }

  return sections.map(renderSection)
}
