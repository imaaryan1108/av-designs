import { createMuiTheme } from '@material-ui/core'


const akira = {
    fontfamily: 'Akira',
    fontStyle: 'normal',
    fontWeight: 'bold',
    src: `local('Akira Expanded Super Bold'), url('./assets/fonts/Akira.woff') format('woff')`,
    }
  

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: "#2228c4",
        }
        
    },
    typography: {
        fontFamily: {
            first: "Akira",
            second: "Rany",
            third: "Rany Bold",
        }
    },
        // typography: {
        //   fontFamily: 'Akira',
        // },
        // overrides: {
        //   MuiCssBaseline: {
        //     '@global': {
        //       '@font-face': [akira],
        //     },
          // },
        // },
    
})

export default theme
