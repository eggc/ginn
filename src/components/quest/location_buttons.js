import React from 'react'
import LocationButton from './location_button'

export default ({locations, onChange}) => {
  const [activeLocationId, setActiveLocationId] = React.useState(null)

  const renderLocation = (location) => {
    return (
      <LocationButton
        key={location.id}
        location={location}
        onClick={(l) => { setActiveLocationId(l.id); onChange(l) } }
        active={location.id === activeLocationId} />
    )
  }

  return <div>{locations.map(renderLocation)}</div>
}
