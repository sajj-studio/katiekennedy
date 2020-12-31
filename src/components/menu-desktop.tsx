import { graphql, Link, useStaticQuery } from 'gatsby'
import React, { FC, useContext } from 'react'
import styled, { css } from 'styled-components'
import { FacebookLogo } from '../assets/Images/facebook'
import { InstagramLogo } from '../assets/Images/instagram'
import { MenuItem } from './header'
import { DesktopMenuQuery } from '../graphqlTypes'
import { ActivePageContext } from '../contexts/active-page'

export const query = graphql`
  query DesktopMenu {
    contentfulContactInfo {
      facebookPage
      instagramPage
    }
  }
`

interface DesktopMenuProps {
  items: MenuItem[]
}

export const DesktopMenu: FC<DesktopMenuProps> = () => {
  const data = useStaticQuery<DesktopMenuQuery>(query)
  const activePage = useContext(ActivePageContext)

  return (
    <_MenuWrapper>
      <_MenuLinkWrapper>
        <_MenuLink to="/gallery">Gallery</_MenuLink>
        <_MenuLinkIndicator isActive={activePage === 'gallery'} />
      </_MenuLinkWrapper>
      <_MenuLinkWrapper>
        <_MenuLink to="/#about-me">About me</_MenuLink>
        <_MenuLinkIndicator isActive={activePage === 'about-me'} />
      </_MenuLinkWrapper>
      <_MenuLinkWrapper>
        <_MenuLink to="/#latest-work">Latest work</_MenuLink>
        <_MenuLinkIndicator isActive={activePage === 'latest-work'} />
      </_MenuLinkWrapper>
      <_MenuLinkWrapper>
        <_MenuLink to="/contact">Contact me</_MenuLink>
        <_MenuLinkIndicator isActive={activePage === 'contact'} />
      </_MenuLinkWrapper>

      <_SocialsWrapper>
        <a href={data.contentfulContactInfo?.facebookPage ?? ''}>
          <_ImageWrapper>
            <FacebookLogo color="pink" />
          </_ImageWrapper>
        </a>
        <a href={data.contentfulContactInfo?.instagramPage ?? ''}>
          <_ImageWrapper>
            <InstagramLogo color="pink" />
          </_ImageWrapper>
        </a>
      </_SocialsWrapper>
    </_MenuWrapper>
  )
}

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
const _MenuLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const _MenuLink = styled(Link)`
  ${({ theme }) => css`
    font-family: ${theme.typography.serif};
    font-weight: 300;
    line-height: 1.125rem;
    font-size: 1.25rem;
    color: ${theme.colors.pink};
  `}
`

const _MenuLinkIndicator = styled.div<{ isActive: boolean }>`
  ${({ isActive, theme }) => css`
    height: 0;
    border-bottom: 2px solid ${theme.colors.pink};
    margin-top: 0.75rem;
    opacity: 0;

    ${_MenuLink}:hover + & {
      opacity: 1;
      animation-duration: 0.5s;
      animation-name: slideIn;
    }
    ${isActive &&
    css`
      opacity: 1;
      animation-duration: 0.5s;
      animation-name: slideIn;
    `}
    @keyframes slideIn {
      0% {
        width: 1px;
      }
      100% {
        width: 100%;
      }
    }
  `}
`
