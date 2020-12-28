import 'styled-components'

declare module 'styled-components' {
  type BreakpointTypes = 'desktop' | 'mobile'
  interface Breakpoint {
    min?: string
    max?: string
  }

  export interface DefaultTheme {
    typography: {
      serif: string
      sansSerif: string
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
    breakpoints: Record<BreakpointTypes, Breakpoint>
    media: Record<BreakpointTypes, string>
  }
}
