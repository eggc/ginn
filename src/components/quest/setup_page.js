import React from 'react'
import { Link } from "react-router-dom"

import Page from '../page'
import {locations, characters, spices} from '../../seeds/'

import LocationButtons from './location_buttons'
import CharacterButtons from './character_buttons'
import SpiceButtons from './spice_buttons'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const quest = {
  location: 0,
  characters: [],
  spice: null
}

export default ({onNext}) => {
  return (
    <Page>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="secondary">何処へ向かうか？</Typography>
          <LocationButtons locations={locations} onChange={(id) => quest.location = id} />

          <Typography variant="subtitle1" color="secondary">誰が向かうか？</Typography>
          <CharacterButtons characters={characters} onChange={(ids) => quest.characters = ids} />

          <Typography variant="subtitle1" color="secondary">イベントカードを使用するか？</Typography>
          <SpiceButtons spices={spices} onChange={(id) => quest.spice = id} />
        </Grid>

        <Grid item xs={6}>
          <Link to="/quest/progress" onClick={()=>onNext(quest)}>
            <Button fullWidth>クエストを始める</Button>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/">
            <Button fullWidth>やめる</Button>
          </Link>
        </Grid>
      </Grid>
    </Page>
  )
}
