import React from 'react'
import Typography from '@material-ui/core/Typography'
import Typist from 'react-typist';

export default ({body, done, color, hideCursor}) => {
  const texts = body.replace(/。/g, "。%%").split("%%")
  hideCursor = hideCursor === undefined ? true : false

  const content = (
    <Typography color={color} align="left" variant="body1" component="span">
      {texts.map((t, i)=><span key={i}>{t}<Typist.Delay ms={300} /></span>)}
    </Typography>
  )

  return (
    <React.Fragment>
      {done && <Typography paragraph>{content}</Typography>}
      {!done && <Typist cursor={{hideWhenDone: hideCursor}}>{content}</Typist>}
    </React.Fragment>
  )
}
