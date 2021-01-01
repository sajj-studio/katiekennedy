import { graphql } from 'gatsby'
import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { JumbotronImageFragment } from '../graphqlTypes'
import { Button } from './button'
import { Container } from './container'

export const fragment = graphql`
  fragment JumbotronImage on ContentfulAsset {
    id
    localFile {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

interface JumbotronProps {
  image?: JumbotronImageFragment | null
  text: string
  linkText?: string
  linkTo?: string
  verticalAlign?: 'middle' | 'bottom'
}

export const Jumbotron: FC<JumbotronProps> = ({
  image,
  text,
  linkText,
  linkTo,
  verticalAlign = 'bottom',
}) => (
  <_Wrapper>
    <_Img
      src={image?.localFile?.childImageSharp?.fluid?.src}
      alt={text ?? ''}
    />
    <_Content verticalAlign={verticalAlign}>
      <h1>{text}</h1>
      {linkText && linkTo && (
        <Button to={linkTo} variant="filled">
          {linkText}
        </Button>
      )}
    </_Content>
  </_Wrapper>
)

const _Wrapper = styled.section`
  position: relative;
  height: 31.25rem;
  display: flex;
  overflow: hidden;
  margin-bottom: 2rem;
`
const _Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`
const _Content = styled(Container)<{
  verticalAlign: JumbotronProps['verticalAlign']
}>`
  ${({ theme, verticalAlign }) => css`
    width: 70%;
    align-self: flex-end;
    padding: 3rem 2rem;

    h1 {
      font-family: ${theme.typography.serif};
      font-size: 2rem;
      color: ${theme.colors.white};
      text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
      margin-bottom: 2rem;
    }

    ${theme.media.desktop} {
      ${verticalAlign === 'middle' &&
      css`
        align-self: center;
      `}
    }
  `}
`
