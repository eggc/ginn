import React from 'react'
import Typography from '@material-ui/core/Typography'
import Typist from 'react-typist';

export default ({body, done, color, onTypingDone}) => {
  const lines = body.split("<br>")

  const renderLine = (line, i) => {
    const texts = line.replace(/。/g, "。%%").split("%%")
    return (
      <span key={i}>
        {texts.map((t, j)=><span key={j}>{t}<Typist.Delay ms={300} /></span>)}
        <br />
      </span>
    )
  }

  const content = (
    <Typography color={color} align="left" variant="body1" component="span">
      {lines.map(renderLine)}
    </Typography>
  )

  return (
    <React.Fragment>
      {done && <Typography paragraph>{content}</Typography>}
      {!done && <Typist onTypingDone={onTypingDone}>{content}</Typist>}
    </React.Fragment>
  )
}
