import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { FooterQuery } from '../graphqlTypes'
import { SectionTitle } from './section-title'
import { Container } from './container'
import { Button } from './button'
import { Typography } from './typography'

export const query = graphql`
  query Footer {
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

export const Footer: FC = () => {
  const data = useStaticQuery<FooterQuery>(query)

  return (
    <_FooterWrapper>
      <_FooterCircle />
      <Container>
        <SectionTitle color="white" circleColor="white">
          Contact me
        </SectionTitle>
        <_FooterContentContacts>
          <a href={data.contentfulContactInfo?.facebookPage ?? ''}>
            <_ImageWrapper src={data.facebook?.publicURL ?? ''} alt={''} />
          </a>
          <a href={data.contentfulContactInfo?.instagramPage ?? ''}>
            <_ImageWrapper src={data.instagram?.publicURL ?? ''} alt={''} />
          </a>
          <_FooterContentContactsSocial className="footer-content__contacts--personal">
            <Typography
              variant="inline"
              color="white"
              as="a"
              href={`mailto:${data.contentfulContactInfo?.email}`}
            >
              {data.contentfulContactInfo?.email}
            </Typography>
            <Typography
              variant="inline"
              color="white"
              as="a"
              href={`tel:${data.contentfulContactInfo?.phoneNumber}`}
            >
              {data.contentfulContactInfo?.phoneNumber}
            </Typography>
          </_FooterContentContactsSocial>
        </_FooterContentContacts>
        <Button variant="filled" to="/contact">
          Book a session
        </Button>
      </Container>
    </_FooterWrapper>
  )
}

const _FooterWrapper = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    height: max-content;
    background: ${theme.colors.beige};
    color: ${theme.colors.white};
    position: relative;
    overflow: hidden;
    /* Below's a weird thing. Unless I define top padding, the margin of the content
     * overflows the boundaries of the footer. But the bottom one has to be 3rem,
     * otherwise the button is horribly cropped. */
    padding: 1px 0 3rem;
    z-index: -1;
  `}
`

const _FooterCircle = styled.circle`
  position: absolute;
  width: 100%;
  z-index: 0;

  ::before {
    display: block;
    position: absolute;
    content: ' ';
    background-size: 50vw 50vw;
    height: 80vw;
    width: 80vw;
    border: 1px solid #fff;
    border-radius: 50%;
    top: 3rem;
    left: 33%;
  }
`

const _FooterContentContacts = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-bottom: 1.25rem;
`

const _FooterContentContactsSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  margin: 0 0 0 1.4rem;
`

const _ImageWrapper = styled.img`
  width: 44px;
  margin: 0 0.5rem 0;

  :nth-child(2) {
    width: 50px;
    height: 50px;
  }
`
