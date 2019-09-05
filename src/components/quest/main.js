import React from 'react'
import SetupPage from './setup_page'
import ProgressPage from './progress_page'
import EvaluatePage from './evaluate_page'

import locations from '../../store/locations'
import characters from '../../store/characters'
import spices from '../../store/spices'


export default () => {
  const defaultQuest = {
    location: locations[1],
    characters: characters,
    spice: spices[0]
  }
  const defaultResult = {}

  const [quest, setQuest] = React.useState(defaultQuest)
  const [result, setResult] = React.useState(defaultResult)

  return (
    <React.Fragment>
      { !quest && <SetupPage onNext={(active) => {setQuest(active) }} />}
      { !result && quest && <ProgressPage quest={quest} onNext={(result) => {setResult(result) }} />}
      { result && <EvaluatePage quest={quest} result={result} />}
    </React.Fragment>
  )
}
