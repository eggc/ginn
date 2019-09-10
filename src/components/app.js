import React from 'react'
import Quest from './quest/main'
import theme from './theme'
import { ThemeProvider } from '@material-ui/styles'

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Quest />
    </ThemeProvider>
  )
}
