import _ from 'lodash'
import React from 'react'
import { Link } from "react-router-dom"

import Page from '../page'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

export default ({onComplete, newcomer}) => {
  const onClick = (e) => {
    onComplete(newcomer)
  }

  if(!newcomer){
    return (
      <Page>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="subtitle1" color="secondary">呼び鈴が鳴った</Typography>

            <Typography>
              そんな気がしたが、扉を開けると虚しく一陣の風が吹いただけだった。
              気の所為だったのかもしれない。
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Link to="/game/home">
              <Button fullWidth>戻る</Button>
            </Link>
          </Grid>
        </Grid>
      </Page>
    )
  }

  return (
    <Page>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="secondary">呼び鈴が鳴った</Typography>
          <Typography>同行を申し出ている者があるようだ。</Typography>
          <Typography color="primary">{newcomer.fullName()} {newcomer.power()}</Typography>
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
