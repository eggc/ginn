import React from 'react'
import Page from '../page';

import { Link } from "react-router-dom"
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'

export default ({results, onComplete}) => {
  const summary = {
    title: '総計',
    money: 0,
    exp: 0
  }

  results.forEach((result)=> {
    if (!isNaN(result.money)) {
      summary.money += result.money
    }
    if (!isNaN(result.exp)) {
      summary.exp += result.exp
    }
  })

  return (
    <Page>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="secondary">冒険の成果</Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right">経験点</TableCell>
                <TableCell align="right">報酬</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{borderTop: "solid 1px white"}}>
              {results.map((c,i)=>(
                <TableRow key={i}>
                  <TableCell>{c.name}</TableCell>
                  <TableCell align="right"> {(c.exp/10).toFixed(1)} EXP </TableCell>
                  <TableCell align="right"> {c.money} G </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell><Typography color="primary">{summary.title}</Typography></TableCell>
                <TableCell align="right"><Typography color="primary">{(summary.exp/10).toFixed(1)} EXP </Typography></TableCell>
                <TableCell align="right"><Typography color="primary">{summary.money} G </Typography></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
        <Grid item xs={6}>
          <Link to="/game/home" onClick={()=>onComplete(summary)}>
            <Button fullWidth>クエストを終了する</Button>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/quest/progress">
            <Button fullWidth>振り返る</Button>
          </Link>
        </Grid>
      </Grid>
    </Page>
  )
}
