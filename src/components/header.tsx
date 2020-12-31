import React, { FC, useCallback, useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled, { css } from 'styled-components'
import { Hamburger } from './hamburger'
import { MobileMenu } from './menu-mobile'
import { HeaderQuery } from '../graphqlTypes'
import { Container } from './container'
import { DesktopMenu } from './menu-desktop'

export const query = graphql`
  query Header {
    contentfulLogo {
      logo {
        localFile {
          publicURL
        }
      }
    }
  }
`

export interface MenuItem {
  id: 'home' | 'gallery' | 'about-me' | 'latest-work' | 'contact'
  href: string
  label: string
}

const menuItems: MenuItem[] = [
  { id: 'home', href: '/', label: 'Home' },
  { id: 'gallery', href: '/gallery', label: 'Gallery' },
  { id: 'about-me', href: '/', label: 'About Me' },
  { id: 'latest-work', href: '/', label: 'Latest Work' },
  { id: 'contact', href: '/contact', label: 'Contact Me' },
]

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = useCallback(() => {
    setIsOpen(open => !open)
  }, [])

  const data = useStaticQuery<HeaderQuery>(query)

  return (
    <_HeaderWrap isOpen={isOpen}>
      <Container>
        <_Header>
          <_Logo>
            <Link to="/">
              <img
                src={data.contentfulLogo?.logo?.localFile?.publicURL ?? ''}
                alt="Katie Kennedy Logo"
              />
            </Link>
          </_Logo>
          <DesktopMenu items={menuItems} />

          <nav>
            <Hamburger isOpen={isOpen} onClick={toggleMenu} />
            <MobileMenu items={menuItems} isOpen={isOpen} />
          </nav>
        </_Header>
      </Container>
    </_HeaderWrap>
  )
}

const _HeaderWrap = styled.header<{ isOpen: boolean }>`
  ${({ isOpen, theme }) => css`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    background: rgba(${theme.colors.white}, 0.875);
    backdrop-filter: blur(30px);

    ${isOpen &&
    css`
      backdrop-filter: none;
      background: rgba(${theme.colors.white}, 0.95);
    `}
  `}
`
const _Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${theme.sizing.headerHeight};
    padding: 0 2.25rem;
  `}
`
const _Logo = styled.div`
  img {
    height: 3rem;
    width: auto;
  }
`
