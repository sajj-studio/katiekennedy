import React, { FC } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { GlobalStyles } from './global-styles'
import { ThemeProvider } from 'styled-components'
import { theme } from './sc-theme'

export const Layout: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        {/* <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
      </div>
      <Footer />
    </ThemeProvider>
  )
}
