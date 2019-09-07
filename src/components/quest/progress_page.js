import React from 'react'
import Page from '../page'
import Sections from './sections'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import locations from '../../store/locations'
import characters from '../../store/characters'
import spices from '../../store/spices'
import questStore from '../../stores/quest_store'

import SectionFactory from '../../factories/sections_factory'

export default ({history}) => {
  const quest = questStore.load()
  const sections = SectionFactory.create(quest)

  const [step, setStep] = React.useState(0)

  const onClick = () => {
    setStep(step+1)
    if(step >= sections.length) {
      history.push("/quest/evaluate")
    }
  }

  return (
    <Page onClick={onClick}>
      <Grid container>
        <Grid item xs={12}>
          <Sections sections={sections} step={step} />
        </Grid>
      </Grid>
    </Page>
  )
}
