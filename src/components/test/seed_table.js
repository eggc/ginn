import _ from 'lodash'
import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom"

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

export default ({factory}) => {
  const renderRow = (i) =>{
    const p = factory.create(i)
    const keys = Object.keys(p)
    const cells = keys.map((key) => <TableCell key={key}>{p[key]}</TableCell>)
    return <TableRow key={i}>
      {cells}
    </TableRow>
  }

  return (
    <div>
      {factory.className}
      <Table size="small">
        <TableBody>
          {_.times(factory.seeds.length, renderRow)}
        </TableBody>
      </Table>
    </div>
  )
}
