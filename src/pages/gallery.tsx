import React, { FC } from 'react'
import { Layout } from '../components/layout'
import { Jumbotron } from '../components/jumbotron'
import { SEO } from '../components/seo'
import { SectionTitle } from '../components/section-title'
import { Featured } from '../components/featured'
import { Button } from '../components/button'
import { graphql, useStaticQuery } from 'gatsby'
import { GalleryPageQuery } from '../graphqlTypes'
import styled from 'styled-components'
import { Gallery } from '../components/gallery'
import { Container } from '../components/container'

export const query = graphql`
  query GalleryPage {
    allContentfulTheme {
      nodes {
        featuredPhotos {
          localFile {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        title
      }
    }
  }
`

const GalleryPage: FC = () => {
  const data = useStaticQuery<GalleryPageQuery>(query)
  return (
    <Layout>
      <SEO title="Gallery" />
      <Jumbotron />
      <SectionTitle color="pink">Different angles</SectionTitle>
      <Featured />

      {data.allContentfulTheme.nodes.map(theme => (
        <_ProjectWrapper>
          <SectionTitle color="pink">{theme.title ?? ''}</SectionTitle>
          <Container>
            {theme?.featuredPhotos && <Gallery photos={theme.featuredPhotos} />}
          </Container>

          <_ButtonWrapper>
            <Button as="button" variant="outline" fullWidth>
              See more
            </Button>
          </_ButtonWrapper>
        </_ProjectWrapper>
      ))}
    </Layout>
  )
}

const _ProjectWrapper = styled.div`
  margin: 0 0 3rem;
`

const _ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default GalleryPage
