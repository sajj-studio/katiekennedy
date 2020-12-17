import React, { FC, useCallback, useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled, { css } from 'styled-components'
import { Hamburger } from './hamburger'
import { Menu } from './sidebar'
import { HeaderQuery } from '../graphqlTypes'

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
    <_HeaderWrap>
      <_Header isOpen={isOpen}>
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
              { href: '/', label: 'Gallery' },
              { href: '/', label: 'About Me' },
              { href: '/', label: 'Latest Work' },
              { href: '/', label: 'Contact Me' },
            ]}
            isOpen={isOpen}
          />
        </nav>
      </_Header>
    </_HeaderWrap>
  )
}

const _HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`
const _Header = styled.div<{ isOpen: boolean }>`
  ${({ isOpen, theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: $header_padding;
    background: rgba(${theme.colors.white}, 0.875);
    backdrop-filter: blur(30px);
    padding: 2rem 2.5625rem;

    ${isOpen &&
    css`
      backdrop-filter: none;
      background: rgba(${theme.colors.white}, 0.95);
    `}
  `}
`
const _Logo = styled.div`
  max-width: 10.375rem;
`
