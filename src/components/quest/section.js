import React from 'react'
import Typography from '@material-ui/core/Typography'
import Typist from 'react-typist';

export default ({body, done, color, x}) => {
  const text = body.replace(/"X"/g, x)
  const content = (
    <Typography color={color} align="left" variant="body1" display="inline">{text}</Typography>
  )

  return (
    <React.Fragment>
      {done && <div>{content}</div>}
      {!done && <Typist>{content}</Typist>}
    </React.Fragment>
  )
}
