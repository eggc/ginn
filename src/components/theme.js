import primary from '@material-ui/core/colors/yellow'
import secondary from '@material-ui/core/colors/orange'
import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  typography: {
    fontFamily: [
      "PixelMplus12"
    ],
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
      },
      root: {
        textDecoration: "none"
      }
    },
    MuiTableCell: {
      head: {
        color: "white"
      },
      body: {
        color: "white"
      }
    }
  }
})
