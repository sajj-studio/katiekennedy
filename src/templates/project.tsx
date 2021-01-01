import React, { FC } from 'react'
import { graphql, Link, PageProps } from 'gatsby'
import { ProjectPageQuery } from '../graphqlTypes'
import { Jumbotron } from '../components/jumbotron'
import { Gallery } from '../components/gallery'
import { Layout } from '../components/layout'
import { Container } from '../components/container'
import { ActivePageContext } from '../contexts/active-page'

export interface ProjectPageContext {
  id: string
}

const ProjectPage: FC<PageProps<ProjectPageQuery, ProjectPageContext>> = ({
  data,
}) => {
  const project = data.contentfulProject

  return (
    <ActivePageContext.Provider value="gallery">
      <Layout>
        <Jumbotron image={project?.coverImage} text={project?.title ?? ''} />
        <Container>
          {project?.photos && (
            <Gallery
              photos={project?.photos}
              ItemWrapper={Link}
              itemWrapperProps={() => ({
                to: `/project/${project?.slug ?? ''}/gallery`,
              })}
            />
          )}
        </Container>
      </Layout>
    </ActivePageContext.Provider>
  )
}

export default ProjectPage

export const query = graphql`
  query ProjectPage($id: String!) {
    contentfulProject(id: { eq: $id }) {
      id
      slug
      title
      coverImage {
        ...JumbotronImage
      }
      photos {
        ...Gallery
      }
    }
  }
`
