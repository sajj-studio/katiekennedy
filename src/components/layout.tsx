import React, { FC } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { GlobalStyles } from './global-styles'
import styled, { css, ThemeProvider } from 'styled-components'
import { theme } from './sc-theme'
import '../assets/fonts/fonts.css'

export const Layout: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <_Main>{children}</_Main>
      <Footer />
    </ThemeProvider>
  )
}

const _Main = styled.main`
  ${({ theme }) => css`
    padding-top: ${theme.sizing.headerHeight};
  `}
`
