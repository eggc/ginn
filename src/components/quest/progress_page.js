import React from 'react'
import SectionsPage from '../shared/sections_page'

export default ({history, sections}) => {
  const onComplete = () => {
    history.push("/quest/evaluate")
  }

  return <SectionsPage sections={sections} onComplete={onComplete} />
}
