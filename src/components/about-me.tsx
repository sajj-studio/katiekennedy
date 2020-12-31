import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { AboutMeQuery } from '../graphqlTypes'
import Img from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { SectionTitle } from '../components/section-title'
import { Typography } from './typography'
import styled, { css } from 'styled-components'
import { Container } from './container'

export const query = graphql`
  query AboutMe {
    contentfulHomepageAboutMe {
      text {
        raw
      }
      image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 585) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export const AboutMe: FC = () => {
  const data = useStaticQuery<AboutMeQuery>(query)

  return (
    <_Container>
      <_MobileOnly>
        <SectionTitle color="pink">About me</SectionTitle>
      </_MobileOnly>
      <_Image
        //@ts-ignore
        fluid={
          data.contentfulHomepageAboutMe?.image?.localFile?.childImageSharp
            ?.fluid
        }
      />
      <_Space />
      <_Content>
        <_DesktopOnly>
          <SectionTitle color="pink">About me</SectionTitle>
        </_DesktopOnly>
        {documentToReactComponents(
          JSON.parse(data.contentfulHomepageAboutMe?.text?.raw ?? '{}'),
          {
            renderNode: {
              [BLOCKS.PARAGRAPH]: (_, children) => (
                <Typography variant="body" color="brown">
                  {children}
                </Typography>
              ),
            },
          }
        )}
      </_Content>
    </_Container>
  )
}

const _MobileOnly = styled.div`
  ${({ theme }) =>
    css`
      ${theme.media.desktop} {
        display: none;
      }
    `}
`
const _DesktopOnly = styled.div`
  ${({ theme }) =>
    css`
      display: none;

      ${theme.media.desktop} {
        display: initial;
      }
    `}
`

const _Container = styled(Container)`
  ${({ theme }) => css`
    margin-top: 4rem;

    ${theme.media.desktop} {
      display: flex;
    }
  `}
`

const _Space = styled.div`
  ${({ theme }) => css`
    margin-bottom: 1.25rem;

    ${theme.media.desktop} {
      display: none;
    }
  `}
`

const _Image = styled(Img)`
  ${({ theme }) => css`
    ${theme.media.desktop} {
      width: 50%;
    }
  `}
`

const _Content = styled.div`
  ${({ theme }) => css`
    ${theme.media.desktop} {
      max-width: 50%;
      width: 24rem;
      margin: 0 auto;
    }
  `}
`
