import _ from 'lodash'
import React from 'react'
import { Link } from "react-router-dom"

import Page from '../page'
import {characters} from '../../seeds/'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

export default ({onComplete, newcomer}) => {
  const onClick = (e) => {
    onComplete(newcomer)
  }

  return (
    <Page>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="secondary">同行を申し出ている者がある</Typography>
          <Typography>{newcomer.name} {newcomer.power} {newcomer.exp}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Link to="/game/home" onClick={onClick}>
            <Button fullWidth>迎え入れる</Button>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/game/home">
            <Button fullWidth>断る</Button>
          </Link>
        </Grid>
      </Grid>
    </Page>
  )
}
