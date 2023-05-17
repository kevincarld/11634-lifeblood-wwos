export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {
    outline: 'none!important',
    _focus: {
      ring: '0px'
    },
  },

  // styles for different sizes ("sm", "md", "lg")
  sizes: {},

  // styles for different visual variants ("outline", "solid")
  variants: {
    round: {
      bg: 'white',
      color: 'link',
      fontFamily: 'heading',
      fontSize: {base: '21px', d: '32px'},
      lineHeight: {base: '27px', d:'42px'},
      height: 'auto',
      pt: '15px',
      pb: '15px',
      pl: '47px',
      pr: '47px',
      borderRadius: '9999px',

      _hover: {
        bg: 'white',
        color: 'primary',
        textDecor: 'none',
      }
    },

    square: {
      bg: 'primary',
      color: 'white',
      borderRadius: '0',
      fontSize: {base: '23px', d: '24px'},
      lineHeight: {base: '33px', d:'44px'},
      height: 'auto',
      py: '10px',
      px: '45px',

      _hover: {
        bg: 'white',
        color: 'primary'
      }
    },
  },

  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    variant: 'round',
  },
}