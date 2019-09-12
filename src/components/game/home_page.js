import React from 'react'
import { Link } from "react-router-dom"

import Page from '../page'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

export default ({game}) => {
  const renderCharacter = (c) => {
    return (
      <div key={c.id}>
        {c.fullName()} / {c.power()}
      </div>
    )
  }

  return (
    <Page>
      <Grid container>
        <Grid item xs={12}>
          <Typography color="secondary">
            ホーム
          </Typography>
          <Typography component="div">
            <div>
              仲間 : {game.characters.map(renderCharacter)}
            </div>
            <div>
              資金 : {game.money}
            </div>
            <div>
              倉庫 : {game.items}
            </div>
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
