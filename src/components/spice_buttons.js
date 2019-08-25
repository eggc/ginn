import React from 'react'
import SpiceButton from './spice_button'

export default ({spices, onChange}) => {
  const [activeSpiceId, setActiveSpiceId] = React.useState(0)

  const renderSpice = (spice) => {
    return (
      <SpiceButton
        key={spice.id}
        spice={spice}
        onClick={(id) => { setActiveSpiceId(id); onChange(id) } }
        active={spice.id === activeSpiceId} />
    )
  }

  return <div>{spices.map(renderSpice)}</div>
}
