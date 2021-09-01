import { extendTheme} from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    highlight: {
      '100': '#FFBA08',
      '50': 'rgba(255, 186, 8, 0.5)',
    },
    dark: {
      'black': '#000000',
      'text': '#47585B',
      'info': '#999999',
      'info.50': 'rgba(153, 153, 153, 0.5)',
    },
    light: {
      'white': '#FFFFFF',
      'text': '#F5F8FA',
      'info': '#DADADA'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body:{
        bg: '#F5F8FA',
        color: 'dark.text'
      }
    }
  }
})