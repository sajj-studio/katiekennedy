import React, { FC } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { FooterQuery } from '../graphqlTypes'

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
      <_SectionWrapper>
        <h2>Contact me</h2>
        <_FooterContentContacts>
          <_IconsWrapper>
            <a href={data.contentfulContactInfo?.facebookPage ?? ''}>
              <_ImageWrapper src={data.facebook?.publicURL ?? ''} alt={''} />
            </a>
            <a href={data.contentfulContactInfo?.instagramPage ?? ''}>
              <_ImageWrapper src={data.instagram?.publicURL ?? ''} alt={''} />
            </a>
          </_IconsWrapper>
          <_FooterContentContactsSocial className="footer-content__contacts--personal">
            <a href="mailto:katiekennedy9@gmail.com">
              {data.contentfulContactInfo?.email}
            </a>
            <a href="tel:5144650339">
              {data.contentfulContactInfo?.phoneNumber}
            </a>
          </_FooterContentContactsSocial>
        </_FooterContentContacts>
        <_FooterBookBtn href="#">Book a session</_FooterBookBtn>
      </_SectionWrapper>
    </_FooterWrapper>
  )
}

const font_body = 'Lato'

const _FooterWrapper = styled.footer`
  width: 100%;
  height: max-content;
  background: #d3cac2;
  color: #fff;
  position: relative;
  overflow: hidden;

  h2 {
    font-size: 2.25rem;
    font-family: 'Playfair Display';

    ::before {
      display: block;
      position: absolute;
      content: ' ';
      background-size: 3.625rem 3.625rem;
      height: 3.625rem;
      width: 3.625rem;
      border: 1px solid #fff;
      border-radius: 50%;
      left: 0;
      transform: translate(-60%, -9px);
    }
  }
`

const _IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const _SectionWrapper = styled.section`
  width: 80%;
  margin: 2rem auto;
`

const _FooterCircle = styled.circle`
  position: absolute;
  width: 100%;

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
    z-index: 0;
  }
`

const _FooterContentContacts = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
  margin-top: 1.25rem;
`

const _FooterContentContactsSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  margin: 0 0 0 1.4rem;
`

const _FooterBookBtn = styled.a`
  font-family: ${font_body};
  font-size: 1rem;
  padding: 1rem 1.625rem;
  display: inline-block;
  text-transform: uppercase;
  background: #c57d76;
  color: #fff;
  border: 1px solid #c57d76;
  box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.51);

  :hover {
    background-color: #bd776f;
    border: 1px solid #bd776f;
  }
`

const _ImageWrapper = styled.img`
  width: 44px;
  height: 100%;
  margin: 0 0.5rem 0;

  :nth-child(2) {
    width: 50px;
    height: 50px;
  }
`
