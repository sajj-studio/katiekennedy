import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ProjectListQuery } from '../graphqlTypes'
import styled from 'styled-components'
import { ProjectThumbnail } from './project-thumbnail'

export const query = graphql`
  query ProjectList {
    allContentfulTheme {
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
      {data.allContentfulTheme.nodes.map(theme => (
        <ProjectThumbnail key={theme.id} project={theme} />
      ))}
    </_Container>
  )
}

const _Container = styled.div`
  display: flex;
`
