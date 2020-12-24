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
          <Button as="button" variant="outline" fullWidth>
            See more
          </Button>
        </_ProjectWrapper>
      ))}
    </Layout>
  )
}

const _ProjectWrapper = styled.div`
  margin: 0 0 3rem;
`

export default GalleryPage
