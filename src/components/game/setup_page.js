import React from 'react'
import { Link } from "react-router-dom"

import Page from '../page'
import {characters} from '../../seeds/'

import CharacterButtons from '../shared/character_buttons'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

export default ({onComplete}) => {
  const [character, setCharacter] = React.useState(null)

  const onClick = (e) => {
    if (character) {
      onComplete(characters[character])
    } else {
      alert("選べ")
      e.preventDefault()
    }
  }

  return (
    <Page>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="secondary">主人公を選べ</Typography>
          <CharacterButtons multiple={false}
                            characters={characters}
                            onChange={(ids) => setCharacter(ids[0])} />
        </Grid>

        <Grid item xs={6}>
          <Link to="/game/home" onClick={onClick}>
            <Button fullWidth>これでよし</Button>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/game">
            <Button fullWidth>やめる</Button>
          </Link>
        </Grid>
      </Grid>
    </Page>
  )
}