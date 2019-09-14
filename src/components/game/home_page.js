import React from 'react'
import { Link } from "react-router-dom"

import SectionsPage from '../shared/sections_page'
import Section from '../shared/section'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'


export default ({game, history}) => {
  const sections = [{
    body: '月詠の酒場 -倉庫-',
    color: "secondary"
  },{
    body: "店長の厚意に甘えて、月詠の酒場の倉庫をねぐらにしている"
  },{
    body: "資金 : " + game.money
  }]

  game.characters.forEach((c) => {
    sections.push({ body:  c.fullName() + " : " + c.power() })
  })

  const onComplete = () => {
    history.push("/quest/setup")
  }

  return (
    <SectionsPage sections={sections} onComplete={onComplete} />
  )
}
