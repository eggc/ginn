import React from 'react'
import { Link } from "react-router-dom"

import Page from '../page'
import {locations} from '../../seeds/'

import LocationButtons from './location_buttons'
import CharacterButtons from '../shared/character_buttons'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const quest = {
  location: null,
  characters: [],
  spice: null
}

export default ({onNext, characters}) => {
  const onClickNext = (e) => {
    if (quest.characters.length > 0 && quest.location) {
      onNext(quest)
    } else {
      alert("目的地とメンバーを選ばない限り、クエストを始める事はできない。")
      e.preventDefault()
    }
  }

  return (
    <Page>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="secondary">何処へ向かうか？</Typography>
          <LocationButtons locations={locations} onChange={(l) => quest.location = l} />

          <Typography variant="subtitle1" color="secondary">誰が向かうか？</Typography>
          <CharacterButtons characters={characters}
                            onChange={(activeCharacters) => quest.characters = activeCharacters.map((c)=>c.id)} />

          {/* <Typography variant="subtitle1" color="secondary">イベントカードを使用するか？</Typography>
              <SpiceButtons spices={spices} onChange={(id) => quest.spice = id} /> */}
        </Grid>

        <Grid item xs={6}>
          <Link to="/quest/progress" onClick={onClickNext}>
            <Button fullWidth>クエストを始める</Button>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/game/home">
            <Button fullWidth>やめる</Button>
          </Link>
        </Grid>
      </Grid>
    </Page>
  )
}
