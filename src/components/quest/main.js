import React from 'react'
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import SetupPage from './setup_page'
import ProgressPage from './progress_page'
import EvaluatePage from './evaluate_page'
import Typography from '@material-ui/core/Typography'

export default () => {
  return (
    <React.Fragment>
      <Router>
        <Typography>
          デバッグ：
          <Link to="/">root</Link> /
          <Link to="/quest/setup">setup</Link> /
          <Link to="/quest/progress/">progress</Link> /
          <Link to="/quest/evaluate/">evaluate</Link>
        </Typography>

        <Switch>
          <Route path="/quest/setup" component={SetupPage} />
          <Route path="/quest/progress" component={ProgressPage} />
          <Route path="/quest/evaluate" component={EvaluatePage} />
        </Switch>
      </Router>
    </React.Fragment>
  )
}
