import React from 'react'
import Page from '../page'
import Sections from './sections'
import Grid from '@material-ui/core/Grid'
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button'

export default ({onComplete, sections}) => {
  const [step, setStep] = React.useState(0)
  const onClick = () => { setStep(step+1) }

  const nextButton = (
    <Grid item xs={12}>
      <Link onClick={onComplete}>
        <Button fullWidth>次へ</Button>
      </Link>
    </Grid>
  )

  return (
    <Page onClick={onClick}>
      <Grid container>
        <Grid item xs={12}>
          <Sections sections={sections} step={step} />
        </Grid>
        {(step >= sections.length) && nextButton}
      </Grid>
    </Page>
  )
}
