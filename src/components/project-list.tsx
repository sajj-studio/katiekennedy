import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ProjectListQuery } from '../graphqlTypes'
import styled from 'styled-components'
import { ProjectThumbnail } from './project-thumbnail'

export const query = graphql`
  query ProjectList {
    allContentfulProject {
      nodes {
        id
        ...Project
      }
    }
  }
`

export const ProjectList: FC = () => {
  const data = useStaticQuery<ProjectListQuery>(query)

  return (
    <_Container>
      {data.allContentfulProject.nodes.map(project => (
        <ProjectThumbnail key={project.id} project={project} />
      ))}
    </_Container>
  )
}

const _Container = styled.div`
  display: flex;
`
