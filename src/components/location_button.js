import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default ({location, active, onClick}) => {
  return (
    <Button
      onClick={() => onClick(location.id)}
      color={active ? "primary" : "default"}
      fullWidth >
      <Grid container>
        <Grid item xs={3}>
          <Typography align="left" variant="body1">{location.name}</Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography align="left" variant="body2">{location.description}</Typography>
        </Grid>
      </Grid>
    </Button>
  )
}
