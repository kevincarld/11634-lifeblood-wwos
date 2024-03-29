import { extendTheme } from '@chakra-ui/react'
import { ButtonStyles as Button } from './components/ButtonStyles'

const customTheme = extendTheme({
  components: {
    Button
  },
  textStyles: {
    body: {
      fontFamily: "body",
      fontWeight: 'medium',
      fontSize: {base: '18px', d: '16px'},
      lineHeight: {base: '30px', d: '28px'},
    },
    subheading: {
      fontFamily: "body",
      fontWeight: '600',
      fontSize: {base: '21px', d: '24px'},
      lineHeight: {base: '36px', d: '42px'},
    },
    quote: {
      fontFamily: "heading",
      fontWeight: '600',
      fontSize: {base: '39px', sm: '43px', d: ''},
      lineHeight: {base: '46px', sm: '50px', d: ''},
    }
  },
  breakpoints : {
    sm: '360px',
    md: '768px',
    lg: '1024px',
    d: '1280px',
    wide: '1600px',
    hd: '1900px',
  },
  fonts: {
    heading: "Fela, system-ui, sans-serif",
    fela: "Fela, system-ui, sans-serif",
    body: "Montserrat, system-ui, sans-serif",
    montserrat: "Montserrat, system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  colors: {
    primary: '#433C50',
    black: '#433C50',
    white: '#FFFFFF',
    link: '#A4152D'
  },
  space: {
    gutter: '20px',
    gridcol: '115px',
    gridmargin: '160px',
    px: '1px',
    spacer: '40px',
    desktop: {
      spacer: '75px'
    },
  },
  sizes: {
    gutter: '20px',
    gridcol: '115px',
    gridmargin: '160px',
    px: '1px',
    spacer: '40px',
    desktop: {
      spacer: '75px'
    },
    max: 'max-content',
    min: 'min-content',
    full: '100%',
    half: '50%',
    container: {
      desktop: '1595px',
    },
  },



  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
})

export default customTheme
