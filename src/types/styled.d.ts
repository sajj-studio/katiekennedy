import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: {
      title: string
      body: string
    }
    colors: {
      white: string
      black: string
      brown: string
      pink: string
      beige: string
    }
    sizing: {
      headerHeight: string
      headerPadding: string
    }
    transitions: {
      default: string
      long: string
    }
  }
}
