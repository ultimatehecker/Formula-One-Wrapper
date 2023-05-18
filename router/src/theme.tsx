import { extendTheme } from '@chakra-ui/react'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = ({
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
});

const themeColor = ({
  bgLight: 'white', bgDark: 'black',
  textLight: 'black', textDark: 'white'
});

const theme = extendTheme({
    colors: {
        black: themeColor.bgDark,
        light: themeColor.bgLight,
    },
    fonts,
    breakpoints,
})

export default theme