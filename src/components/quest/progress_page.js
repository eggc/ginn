import React from 'react'
import Page from '../page'
import Sections from './sections'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

export default ({history, sections}) => {
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
