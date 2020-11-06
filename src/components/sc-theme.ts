import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  typography: {
    title: 'Playfair Display',
    body: 'Lato',
  },
  colors: {
    white: '#FFF',
    black: '#000',
    grey: '#626267',
    pink: '#C57D76',
    beige: '#D3CAC2',
  },
  sizing: {
    headerHeight: '6.25rem',
    headerPadding: '1.625rem 2.5rem',
    bodyPadding: '2.25rem 2.5rem',
  },
  transitions: {
    default: '0.2s',
    long: '0.4s',
  },
}
