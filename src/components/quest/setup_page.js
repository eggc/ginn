import React from 'react'
import { Link } from "react-router-dom"

import Page from '../page'
import LocationButtons from './location_buttons'
import CharacterButtons from '../shared/character_buttons'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

export default ({onNext, characters, quests}) => {
  const [plan, setPlan] = React.useState({})

  const onClickNext = (e) => {
    if (plan.characters.length > 0 && plan.quest) {
      onNext(plan)
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
          <LocationButtons locations={quests}
                           onChange={(q) => setPlan(Object.assign(plan, {quest: q})) } />
          <Typography variant="subtitle1" color="secondary">誰が向かうか？</Typography>
          <CharacterButtons characters={characters}
                            onChange={(cs) => setPlan(Object.assign(plan, {characters}))} />
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
