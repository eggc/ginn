import React from 'react'
import LocationButton from './location_button'

export default ({locations, onChange}) => {
  const [activeLocationId, setActiveLocationId] = React.useState(0)

  const renderLocation = (location) => {
    return (
      <LocationButton
        key={location.id}
        location={location}
        onClick={(id) => { setActiveLocationId(id); onChange(id) } }
        active={location.id === activeLocationId} />
    )
  }

  return <div>{locations.map(renderLocation)}</div>
}
