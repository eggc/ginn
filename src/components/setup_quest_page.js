import React from 'react'
import Page from './page';
import locations from '../store/locations'

import LocationButtons from './location_buttons'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default () => {
  const renderCharacter = (character) => {
    return (
      <p>{character.name}</p>
    )
  }

  return (
    <Page>
      <Grid container>
        <Grid item lg={12}>
          <Typography variant="subtitle1" color="secondary">何処へ向かうか？</Typography>
          <LocationButtons locations={locations} onChange={(id)=>console.log(id)}/>

          <Typography variant="subtitle1">誰が向かうか？</Typography>

          <Typography variant="subtitle1">物資は何を与えるか？</Typography>
        </Grid>
      </Grid>
    </Page>
  )
}
