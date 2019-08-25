import React from 'react'
import Page from './page';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import primary from '@material-ui/core/colors/yellow';
import secondary from '@material-ui/core/colors/orange';

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
        color: "white"
      },
      outlined: {
        borderRadius: 0
      }
    }
  }
})

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Page />
    </ThemeProvider>
  )
}
