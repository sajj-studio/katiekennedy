import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  typography: {
    serif: '"DM Serif Display", serif',
    sansSerif: '"San Francisco Display", sans-serif',
  },
  colors: {
    white: '#fff',
    black: '#000',
    brown: '#b7895f',
    pink: '#c57d75',
    beige: '#d3cac3',
  },
  sizing: {
    headerHeight: '7.125rem',
    headerPadding: '1.625rem 2.5rem',
  },
  transitions: {
    default: '0.2s',
    long: '0.4s',
  },
}
