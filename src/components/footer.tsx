import React, { FC } from 'react'
import styled from 'styled-components'

export const Footer: FC = () => (
  <_FooterWrapper>
    <_FooterCircle />
    <section>
      <h2>Contact me</h2>
      <_FooterContentContacts>
        <div className="footer-content__contacts--social">
          <a href="/" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <_FooterContentContactsSocial className="footer-content__contacts--personal">
          <a href="mailto:katiekennedy9@gmail.com">katiekennedy9@gmail.com</a>
          <a href="tel:5144650339">514-465-0339</a>
        </_FooterContentContactsSocial>
      </_FooterContentContacts>
      <_FooterBookBtn href="#">Book a session</_FooterBookBtn>
    </section>
  </_FooterWrapper>
)

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
  justify-content: space-between;
  margin-bottom: 1.25rem;
  margin-top: 1.25rem;
`

const _FooterContentContactsSocial = styled.div`
  display: flex;
  flex-direction: column;
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

  :hover {
    background-color: #bd776f;
    border: 1px solid #bd776f;
  }
`
