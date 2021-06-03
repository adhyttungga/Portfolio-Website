import { createMuiTheme } from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            light: '#5c67a3',
            main: '#3f4771',
            dark: '#2e355b',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff79b0',
            main: '#ff4081',
            dark: '#c60055',
            contrastText: '#000',
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
    fontSize: "3.8vw",
    fontWeight: 400,
    fontFamily: "sans-serif",
    "@media (min-width: 600px)": {
        fontSize: "1.25rem"
    }
}

export default theme