import React, { FC, useCallback, useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled, { css } from 'styled-components'
import { Hamburger } from './hamburger'
import { Menu } from './sidebar'
import { HeaderQuery } from '../graphqlTypes'
import { Container } from './container'
import { Typography } from './typography'
import { InstagramLogo } from '../assets/Images/instagram'
import { FacebookLogo } from '../assets/Images/facebook'

export const query = graphql`
  query Header {
    contentfulLogo {
      logo {
        localFile {
          publicURL
        }
      }
    }
    contentfulContactInfo {
      email
      facebookPage
      instagramPage
      phoneNumber
    }
    instagram: file(name: { eq: "icons8-instagram" }) {
      publicURL
    }
    facebook: file(name: { eq: "icons8-facebook" }) {
      publicURL
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
          <_MenuWrapper>
            <Typography
              variant="menu-desktop"
              color="pink"
              as="a"
              href={'/gallery'}
            >
              Gallery
            </Typography>
            <Typography variant="menu-desktop" color="pink" as="a" href={'/'}>
              About me
            </Typography>
            <Typography variant="menu-desktop" color="pink" as="a" href={'/'}>
              Latest work
            </Typography>
            <Typography
              variant="menu-desktop"
              color="pink"
              as="a"
              href={'/contact'}
            >
              Contact me
            </Typography>
            <_SocialsWrapper>
              <a href={data.contentfulContactInfo?.facebookPage ?? ''}>
                <_ImageWrapper>
                  <FacebookLogo color="#C57D75" />
                </_ImageWrapper>
              </a>
              <a href={data.contentfulContactInfo?.instagramPage ?? ''}>
                <_ImageWrapper>
                  <InstagramLogo color="#C57D75" />
                </_ImageWrapper>
              </a>
            </_SocialsWrapper>
          </_MenuWrapper>

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

const _MenuWrapper = styled.div`
  ${({ theme }) => css`
    display: none;
    ${theme.media.desktop} {
      display: block;
      width: 80%;
      display: flex;
      flex-direction: row;
      margin-left: 6rem;
      justify-content: space-between;
    }
  `}
`

const _SocialsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`

const _ImageWrapper = styled.div`
  width: 1.3125rem;
  margin: 0 0.5rem 0;

  :nth-child(2) {
    width: 50px;
    height: 50px;
  }
`
