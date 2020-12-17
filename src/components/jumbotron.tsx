import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { JumbotronQuery } from '../graphqlTypes'
import styled, { css } from 'styled-components'
import { Button } from './button'

export const query = graphql`
  query Jumbotron {
    contentfulHomepageJumbotron {
      text
      image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1600) {
              src
            }
          }
        }
      }
    }
  }
`

export const Jumbotron: FC = () => {
  const data = useStaticQuery<JumbotronQuery>(query)

  return (
    <_Wrapper>
      <_Img
        src={
          data.contentfulHomepageJumbotron?.image?.localFile?.childImageSharp
            ?.fluid?.src
        }
        alt={data.contentfulHomepageJumbotron?.text ?? ''}
      />
      <_Content>
        <h1>Welcome to my Portfolio</h1>
        <Button to="/" variant="filled">
          Explore
        </Button>
      </_Content>
    </_Wrapper>
  )
}

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
const _Content = styled.div`
  ${({ theme }) => css`
    width: 70%;
    align-self: flex-end;
    padding: 3rem 2rem;

    h1 {
      font-family: 'DM Serif Display';
      font-size: 2rem;
      color: ${theme.colors.white};
      text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
      margin-bottom: 2rem;
    }
  `}
`