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

export const hexToRGBA = (hexCode: string, opacity: number): string => {
  let hex = hexCode.replace('#', '')

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
  }

  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`
}
