import React from 'react'
import Page from '../page';
import Sections from './sections';
import questEvents from '../../store/quest_events'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const testSection = (() => {
  const sections = []
  questEvents.forEach((questEvent) => {
    const result = questEvent.results[Math.floor(questEvent.results.length * Math.random())]
    sections.push(questEvent)
    sections.push(result)
  })
  return sections
})()

export default ({quest, sections=testSection, onNext}) => {
  const [step, setStep] = React.useState(0)
  const [character] = React.useState(quest.characters[Math.floor(quest.characters.length * Math.random())])

  const onClick = () => {
    if(step === sections.length){
      onNext("result object")
    } else {
      setStep(step+1)
    }
  }

  return (
    <Page onClick={onClick}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="secondary">"{quest.location.name}"の探検</Typography>
          <Sections sections={sections} step={step} character={character} />
        </Grid>
      </Grid>
    </Page>
  )
}
