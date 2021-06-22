import { createMuiTheme } from '@material-ui/core/styles';
import {primaryColor, secondaryColor, neutralColor, thirdColor } from './colors'

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
    // text: {
    //     primary: neutralColor
    // }
  },
});


export default theme