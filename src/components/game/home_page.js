import React from 'react'
import { Link } from "react-router-dom"

import Page from '../page'
import {characters} from '../../seeds/'

import CharacterButtons from '../quest/character_buttons'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

export default ({game}) => {
  return (
    <Page>
      <Grid container>
        <Grid item xs={12}>
          <Typography color="secondary">
            ホーム
          </Typography>
          <Typography>
            仲間一覧 : {game.characters.map((c)=><span key={c.id}>{c.name}</span>)}
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Link to="/quest/setup">
            <Button fullWidth>次の冒険へ</Button>
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
