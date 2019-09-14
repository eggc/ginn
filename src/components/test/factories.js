import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom"

import LocationFactory from "../../factories/location_factory"
import QuestFactory from "../../factories/quest_factory"
import QuestEventFactory from "../../factories/quest_event_factory"
import QuestEventResultFactory from "../../factories/quest_event_result_factory"

export default () => {
  const l = LocationFactory.create(0)
  const q = QuestFactory.create(0)
  const qe = QuestEventFactory.create(0)
  const ql = QuestEventResultFactory.create(0)

  return (
    <React.Fragment>
      Location
      <div>{l.name}</div>
      <div>{l.description}</div><br/>

      QuestEventResult
      <div>{ql.name}</div>
      <div>{ql.body}</div><br/>

      QuestEvent
      <div>{qe.name}</div>
      <div>{qe.body}</div>
      <div>{qe.results[0].name}</div>
      <div>{qe.results[0].body}</div><br/>

      Quest
      <div>{q.name}</div>
      <div>{q.description}</div>
      <div>{q.location.name}</div>
      <div>{q.location.description}</div>
      <div>{q.events[0].name}</div>
      <div>{q.events[0].body}</div><br/>

    </React.Fragment>
  )
}
