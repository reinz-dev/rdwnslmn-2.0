import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#08090D')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'none',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', 'grassBlue')(props)
    })
  },
  Button: {
    variants: {
      BioDarkButton: {
        bg: 'whiteAlpha.50',
        color: 'whiteAlpha.800',
        fontSize: 'sm',
        _hover: {
          bg: 'whiteAlpha.300',
          color: 'whiteAlpha.800'
        }
      },
      BioLightButton: {
        bg: 'gray.700',
        color: 'whiteAlpha.900',
        _hover: {
          bg: 'gray.600',
          color: 'whiteAlpha.900'
        }
      },
      ResumeButton: {
        bg: '#CACFF6',
        color: '#08090D',
        fontSize: 'sm',
        _hover: {
          bg: '#A8B2FB',
          color: '#08090D'
        }
      },
      ContactButton: {
        bg: 'transparent',
        border: '1px solid',
        borderColor: '#CACFF6',
        color: '#CACFF6',
        fontSize: 'sm',
        _hover: {
          bg: 'whiteAlpha.300',
          color: 'whiteAlpha.800'
        }
      }
    }
  },
  Box: {
    variants: {
      separatorLine: {
        bg: 'whiteAlpha.500'
      }
    }
  }
}

const fonts = {
  heading: "'Futura', sans-serif"
}

const colors = {
  grassTeal: '#0c3c63',
  grassBlueDark: '#90cdf4',
  grassBlueLight: '#3182ce',
  grayDark: 'gray.500',
  grayLight: 'whiteAlpha.500',
  separatorGray: 'gray.700',
  separatorWhite: 'whiteAlpha.800',
  textDark: 'whiteAlpha.800',
  textLight: 'gray.800'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
