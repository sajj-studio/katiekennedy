import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ProjectListQuery } from '../graphqlTypes'
import styled from 'styled-components'
import { ProjectThumbnail } from './project-thumbnail'

export const query = graphql`
  query ProjectList {
    projects: allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
      nodes {
        id
        childMarkdownRemark {
          id
          frontmatter {
            ...Project
          }
        }
      }
    }
  }
`

export const ProjectList: FC = () => {
  const data = useStaticQuery<ProjectListQuery>(query)

  return (
    <_Container>
      {data.projects.nodes.map(
        project =>
          project.childMarkdownRemark?.frontmatter && (
            <ProjectThumbnail
              key={project.id}
              project={project.childMarkdownRemark?.frontmatter}
            />
          )
      )}
    </_Container>
  )
}

const _Container = styled.div`
  display: flex;
`
