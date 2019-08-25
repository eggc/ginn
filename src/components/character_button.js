import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default ({character, active, onClick}) => {
  return (
    <Button
      onClick={() => onClick(character.id)}
      color={active ? "primary" : "default"}
      >
      <Typography variant="body1">{character.title}</Typography>
      <Typography variant="body1">{character.name}</Typography>
    </Button>
  )
}
