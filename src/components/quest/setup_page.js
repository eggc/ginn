import React from 'react'
import Page from '../page';
import locations from '../../store/locations'
import characters from '../../store/characters'
import spices from '../../store/spices'

import LocationButtons from './location_buttons'
import CharacterButtons from './character_buttons'
import SpiceButtons from './spice_buttons'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

export default () => {
  return (
    <Page>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="secondary">何処へ向かうか？</Typography>
          <LocationButtons locations={locations} onChange={(id)=>console.log(id)}/>

          <Typography variant="subtitle1" color="secondary">誰が向かうか？</Typography>
          <CharacterButtons characters={characters} onChange={(id)=>console.log(id)}/>

          <Typography variant="subtitle1" color="secondary">イベントカードを使用するか？</Typography>
          <SpiceButtons spices={spices} onChange={(id)=>console.log(id)}/>
        </Grid>

        <Grid item xs={6}>
          <Button fullWidth>クエストを始める</Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth>やめる</Button>
        </Grid>
      </Grid>
    </Page>
  )
}
