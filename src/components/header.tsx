import React, { FC, useCallback, useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled, { css } from 'styled-components'
import { Hamburger } from './hamburger'
import { Menu } from './sidebar'
import { HeaderQuery } from '../graphqlTypes'
import { Container } from './container'

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
          <nav>
            <Hamburger isOpen={isOpen} onClick={toggleMenu} />
            <Menu
              items={[
                { href: '/', label: 'Home' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/', label: 'About Me' },
                { href: '/', label: 'Latest Work' },
                { href: '/contact', label: 'Contact Me' },
              ]}
              isOpen={isOpen}
            />
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
