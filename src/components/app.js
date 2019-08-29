import React from 'react'
import Quest from './quest/main'

import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import primary from '@material-ui/core/colors/yellow'
import secondary from '@material-ui/core/colors/orange'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "PixelMplus12"
    ]
  },
  palette: {
    primary: primary,
    secondary: secondary
  },
  overrides: {
    MuiButton: {
      text: {
        color: "white",
        borderRadius: 0
      },
      outlined: {
        color: "white",
        borderColor: "white",
        borderRadius: 0
      }
    }
  }
})

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Quest />
    </ThemeProvider>
  )
}
