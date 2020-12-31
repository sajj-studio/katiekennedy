import React, { FC } from 'react'
import { graphql, Link, PageProps } from 'gatsby'
import { ThemePageQuery } from '../graphqlTypes'
import { Jumbotron } from '../components/jumbotron'
import { Gallery } from '../components/gallery'
import { Layout } from '../components/layout'
import { Container } from '../components/container'
import { ActivePageContext } from '../contexts/active-page'

export interface ThemePageContext {
  id: string
}

interface LinkToProjectProps {
  slug: string
}
const _LinkToProject: FC<LinkToProjectProps> = ({ children, slug }) => (
  <Link to={`/project/${slug}`}>{children}</Link>
)

const ThemePage: FC<PageProps<ThemePageQuery, ThemePageContext>> = ({
  data,
}) => {
  const theme = data.contentfulTheme

  return (
    <ActivePageContext.Provider value="gallery">
      <Layout>
        <Jumbotron image={theme?.coverImage} text={theme?.title ?? ''} />
        <Container>
          {theme?.project?.map(
            project =>
              project?.featuredPhotos?.filter(Boolean) && (
                <Gallery
                  photos={project?.featuredPhotos}
                  ItemWrapper={_LinkToProject}
                  itemWrapperProps={{ slug: project.slug ?? '' }}
                />
              )
          )}
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
