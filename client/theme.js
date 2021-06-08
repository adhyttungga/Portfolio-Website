import { createMuiTheme } from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            dark: '#000000',
            light: '#fffdfe',
            main: '#fafafa',
            contrastText: '#ff7f11'
        },
        secondary: {
            light: '#d82f45',
            main: '#8fccf9',
            dark: '#9a0c28',
            contrastText: '#fffdfe',
        },
            openTitle: '#3f4771',
            protectedTitle: pink['400'],
            type: 'light'
    }
})

theme.typography.h2 = {
    fontSize: "7vw",
    fontWeight: 400,
    fontFamily: [
        'Arial',
        'sans-serif',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '@media (min-width: 600px)': {
        fontSize: "3.75rem"
    }
}

theme.typography.h3 = {
    fontSize: "5.5vw",
    fontWeight: 400,
    fontFamily: [
        'Roboto',
        'Arial',
        'sans-serif',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '@media (min-width: 600px)': {
        fontSize: "2.2rem"
    }
}

theme.typography.h6 = {
    fontSize: "4.3vw",
    fontWeight: 400,
    fontFamily: "Roboto",
    "@media (min-width: 600px)": {
        fontSize: "1.4rem"
    }
}

export default theme