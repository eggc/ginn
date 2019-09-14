import _ from 'lodash'
import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom"

import LocationFactory from "../../factories/location_factory"
import QuestFactory from "../../factories/quest_factory"
import QuestEventFactory from "../../factories/quest_event_factory"
import QuestEventResultFactory from "../../factories/quest_event_result_factory"

import Page from '../page'
import SeedTable from './seed_table'

export default () => {
  const q = QuestFactory.create(0)

  return (
    <Page fullWidth>
      Quest
      <div>{q.name}</div>
      <div>{q.description}</div>
      <div>{q.location.name}</div>
      <div>{q.location.description}</div>
      <div>{q.events[0].name}</div>
      <div>{q.events[0].body}</div><br/>
    </Page>
  )
}
