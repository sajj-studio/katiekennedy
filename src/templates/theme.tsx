import React, { FC } from 'react'
import { graphql, PageProps } from 'gatsby'
import { GalleryFragment, ThemePageQuery } from '../graphqlTypes'
import { Jumbotron } from '../components/jumbotron'
import { Gallery } from '../components/gallery'
import { Layout } from '../components/layout'
import { Container } from '../components/container'

export interface ThemePageContext {
  id: string
}

const ThemePage: FC<PageProps<ThemePageQuery, ThemePageContext>> = ({
  data,
}) => {
  const theme = data.contentfulTheme
  const photos = theme?.project?.reduce<(GalleryFragment | null)[]>(
    (res, project) => [
      ...res,
      ...(project?.featuredPhotos ? project?.featuredPhotos : []),
    ],
    []
  )

  return (
    <Layout>
      <Jumbotron image={theme?.coverImage} text={theme?.title ?? ''} />
      <Container>
        {photos?.filter(Boolean) && <Gallery photos={photos} />}
      </Container>
    </Layout>
  )
}

export default ThemePage

export const query = graphql`
  query ThemePage($id: String!) {
    contentfulTheme(id: { eq: $id }) {
      id
      title
      coverImage {
        ...JumbotronImage
      }
      project {
        slug
        featuredPhotos {
          ...Gallery
        }
      }
    }
  }
`
