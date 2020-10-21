import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#007BFF'
            
        },
        secondary: {
            main: green[500]
        }
    },
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif',
        ].join(','),
    },
})

export default responsiveFontSizes(theme);