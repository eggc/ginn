import _ from 'lodash'
import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom"

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

export default ({factory}) => {
  const renderCellContent = (val) => {
    if (Array.isArray(val)) {
      return val.map((v,j) => <span key={j}>{_.truncate(v)}<br/></span>)
    } else {
      return _.truncate(val)
    }
  }

  const renderRow = (i) =>{
    const p = factory.create(i)
    const attrs = p.attributes()
    const cells = _.map(attrs, (val,key) => <TableCell key={key}>
      {renderCellContent(val)}
    </TableCell>)
    return <TableRow key={i}>
      {cells}
    </TableRow>
  }

  return (
    <div>
      {factory.className}
      <Table size="small">
        <TableHead>
          <TableRow>
            {_.map(factory.create(0).attributeNames(), (val,key)=><TableCell key={key}>{val}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {_.times(factory.seeds.length, renderRow)}
        </TableBody>
      </Table>
    </div>
  )
}
