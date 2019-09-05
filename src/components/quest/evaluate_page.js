import React from 'react'
import Page from '../page';

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

export default ({quest, result}) => {
  result = {
    rewards: [{
      id: 0,
      name: "崖下に咲く花",
      money: 100,
      exp: 1.0
    },{
      id: 1,
      name: "ゲバル討伐",
      money: 1000,
      exp: 1.0
    },{
      id: 2,
      name: quest.location.name + "攻略",
      money: 0,
      exp: 1.0
    },{
      id: 3,
      name: "シールドマンティス遭遇",
      money: 0,
      exp: 1.5
    }]
  }

  const summary = {
    name: '総計',
    money: 0,
    exp: 0
  }
  result.rewards.each((reward)=> {
    summary.money += reward.money
    summary.exp += reward.exp
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
              {result.rewards.map((c,i)=>(
                <TableRow key={i}>
                  <TableCell>{c.name}</TableCell>
                  <TableCell align="right"> {c.exp.toFixed(1)} EXP </TableCell>
                  <TableCell align="right"> {c.money} G </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell><Typography color="primary">{summary.name}</Typography></TableCell>
                <TableCell align="right"><Typography color="primary">{summary.exp} EXP </Typography></TableCell>
                <TableCell align="right"><Typography color="primary">{summary.money} G </Typography></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Page>
  )
}
