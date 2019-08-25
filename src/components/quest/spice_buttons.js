import React from 'react'
import SpiceButton from './spice_button'

export default ({spices, onChange}) => {
  const [activeSpiceId, setActiveSpiceId] = React.useState(null)

  const onClick = (id) => {
    if(id === activeSpiceId) {
      id = null
    }
    setActiveSpiceId(id)
    onChange(id)
  }


  const renderSpice = (spice) => {
    return (
      <SpiceButton
        key={spice.id}
        spice={spice}
        onClick={onClick}
        active={spice.id === activeSpiceId} />
    )
  }

  return <div>{spices.map(renderSpice)}</div>
}
