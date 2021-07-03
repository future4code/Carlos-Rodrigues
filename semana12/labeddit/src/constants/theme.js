import { createMuiTheme } from '@material-ui/core/styles';
import {primaryColor, secondaryColor, thirdColor } from './colors'

const theme = createMuiTheme({

  palette: {
    background: {
      default: secondaryColor
    } ,
    primary: {
      main: primaryColor,
      light: thirdColor,
      contrastText: "white", 
    },
    secondary: {
      main: secondaryColor,
    },
    info: {
      main: thirdColor,
    },
    text: {
        primary: "rgb(0, 0, 0)",
    }
  },
});


export default theme