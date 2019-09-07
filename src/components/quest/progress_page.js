import React from 'react'
import Page from '../page';
import Sections from './sections';

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import locations from '../../store/locations'
import characters from '../../store/characters'
import spices from '../../store/spices'

import SectionFactory from '../../factories/sections_factory'

const loadQuest = () => {
  const questBase = JSON.parse(localStorage.getItem("quest"))
  const quest = {
    location: locations[questBase.location],
    characters: questBase.characters.map((c) => characters[c]),
    spice: spices[questBase.spice]
  }
  return quest
}

const quest = loadQuest()
const sections = SectionFactory.create(quest)

export default () => {
  const [step, setStep] = React.useState(0)

  return (
    <Page onClick={()=>setStep(step+1)}>
      <Grid container>
        <Grid item xs={12}>
          <Sections sections={sections} step={step} />
        </Grid>
      </Grid>
    </Page>
  )
}
