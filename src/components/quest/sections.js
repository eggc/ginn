import React from 'react'
import Section from './section';

export default ({sections, step}) => {
  const renderSection = (section, i) => {
    const done = step > i
    const color = section.results ? "inherit" : "primary"
    const content = (
      <Section key={i} body={section.body} done={done} color={color}/>
    )

    return <span key={i}>{step >= i && content}</span>
  }

  return sections.map(renderSection)
}
