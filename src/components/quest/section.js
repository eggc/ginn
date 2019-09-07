import React from 'react'
import Typography from '@material-ui/core/Typography'
import Typist from 'react-typist';

export default ({body, done, color}) => {
  const texts = body.replace(/。/g, "。%%").split("%%")

  const content = (
    <Typography color={color} align="left" variant="body1" display="inline">
      {texts.map((t, i)=><span key={i}>{t}<Typist.Delay ms={300} /></span>)}
    </Typography>
  )

  return (
    <React.Fragment>
      {done && <div>{content}</div>}
      {!done && <Typist>{content}</Typist>}
    </React.Fragment>
  )
}
