import React, { FC, useMemo } from 'react'
import { graphql, Link, PageProps } from 'gatsby'
import { GalleryFragment, ThemePageQuery } from '../graphqlTypes'
import { Jumbotron } from '../components/jumbotron'
import { Gallery } from '../components/gallery'
import { Layout } from '../components/layout'
import { Container } from '../components/container'
import { ActivePageContext } from '../contexts/active-page'
import { notEmpty } from '../util/notEmpty'
import { SEO } from '../components/seo'

export interface ThemePageContext {
  id: string
}

const ThemePage: FC<PageProps<ThemePageQuery, ThemePageContext>> = ({
  data,
}) => {
  const theme = data.contentfulTheme

  const slugByPhoto = useMemo(() => {
    const result: Record<string, string> = {}

    for (const project of theme?.project ?? [])
      if (project)
        for (const photo of project.featuredPhotos ?? [])
          if (typeof photo?.id === 'string') {
            result[photo.id] = project.slug ?? ''
          }

    return result
  }, [theme?.project])
  const photos: GalleryFragment[] = useMemo(
    () =>
      theme?.project
        ?.reduce(
          //@ts-ignore
          (res, project) => [...res, ...(project?.featuredPhotos ?? [])],
          []
        )
        //@ts-ignore
        ?.filter(notEmpty),
    [theme?.project]
  )

  return (
    <ActivePageContext.Provider value="gallery">
      <SEO title={theme?.title ?? ''} />
      <Layout>
        <Jumbotron image={theme?.coverImage} text={theme?.title ?? ''} />
        <Container>
          <Gallery
            photos={photos}
            ItemWrapper={Link}
            itemWrapperProps={({ id }) => ({
              to: `/project/${slugByPhoto[id]}`,
            })}
          />
        </Container>
      </Layout>
    </ActivePageContext.Provider>
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
