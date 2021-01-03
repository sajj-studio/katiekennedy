import React, { FC } from 'react'
import { Layout } from '../components/layout'
import { Jumbotron } from '../components/jumbotron'
import { SEO } from '../components/seo'
import { SectionTitle } from '../components/section-title'
import { Featured } from '../components/featured'
import { Button } from '../components/button'
import { graphql, useStaticQuery } from 'gatsby'
import { GalleryPageQuery } from '../graphqlTypes'
import styled, { css } from 'styled-components'
import { Gallery } from '../components/gallery'
import { Container } from '../components/container'
import { ActivePageContext } from '../contexts/active-page'

export const query = graphql`
  query GalleryPage {
    allContentfulTheme {
      nodes {
        title
        slug
        featuredPhotos {
          ...Gallery
        }
        coverImage {
          ...JumbotronImage
        }
      }
    }
  }
`

const GalleryPage: FC = () => {
  const data = useStaticQuery<GalleryPageQuery>(query)
  return (
    <ActivePageContext.Provider value="gallery">
      <Layout>
        <SEO title="Gallery" />
        <Jumbotron
          image={
            data.allContentfulTheme.nodes?.[Math.floor(Math.random() * 100) % 3]
              .coverImage
          }
          text="Gallery"
        />

        <Featured />

        {data.allContentfulTheme.nodes.map(theme => (
          <ProjectContainer>
            <_AlignCenter>
              <SectionTitle color="pink">{theme.title ?? ''}</SectionTitle>
            </_AlignCenter>
            {theme?.featuredPhotos && <Gallery photos={theme.featuredPhotos} />}
            <_Button to={`/theme/${theme.slug}`} variant="outline">
              See more
            </_Button>
          </ProjectContainer>
        ))}
      </Layout>
    </ActivePageContext.Provider>
  )
}

const ProjectContainer = styled(Container)`
  margin-bottom: 3rem;
`

const _AlignCenter = styled.div`
  ${({ theme }) => css`
    ${theme.media.tablet} {
      margin: 0 -1.25rem;
    }
  `}
`

const _Button = styled(Button)`
  ${({ theme }) => css`
    display: block;
    margin: 0 -1.25rem;
    max-width: 23rem;

    ${theme.media.tablet} {
      margin: 0 auto;
    }
  `}
`

export default GalleryPage
