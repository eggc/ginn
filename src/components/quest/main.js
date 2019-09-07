import React from 'react'
import SetupPage from './setup_page'
import ProgressPage from './progress_page'
import EvaluatePage from './evaluate_page'

import locations from '../../store/locations'
import characters from '../../store/characters'
import spices from '../../store/spices'

import SectionFactory from '../../factories/sections_factory'

const testQuest = {
  location: locations[1],
  characters: characters,
  spice: spices[0]
}
const testSections = SectionFactory.create(testQuest)

export default () => {
  const [quest, setQuest] = React.useState(testQuest)
  const [result, setResult] = React.useState(null)

  return (
    <React.Fragment>
      { !quest && <SetupPage onNext={(active) => {setQuest(active) }} />}
      { !result && quest && <ProgressPage quest={quest} sections={testSections} onNext={(result) => {setResult(result) }} />}
      { result && <EvaluatePage quest={quest} result={result} />}
    </React.Fragment>
  )
}
