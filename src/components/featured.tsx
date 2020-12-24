import React, { FC, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ProjectThumbnail } from './project-thumbnail'
import { FeaturedQuery } from '../graphqlTypes'
import { Container } from './container'
import { ProjectList } from './project-list'
import { Button } from './button'
import styled from 'styled-components'

export const query = graphql`
  query Featured {
    contentfulHomepageFeatured {
      projects {
        ...ProjectThumbnail
      }
      themes {
        ...ThemeThumbnail
      }
    }
  }
`

export const Featured: FC = () => {
  const [tab, setTab] = useState<'themes' | 'projects'>('themes')
  const data = useStaticQuery<FeaturedQuery>(query)

  return (
    <Container>
      {tab === 'themes' && (
        <ProjectList>
          {data.contentfulHomepageFeatured?.themes?.map(
            theme =>
              theme && (
                <ProjectThumbnail key={theme.id} type="theme" data={theme} />
              )
          )}
        </ProjectList>
      )}

      {tab === 'projects' && (
        <ProjectList>
          {data.contentfulHomepageFeatured?.projects?.map(
            project =>
              project && (
                <ProjectThumbnail
                  key={project.id}
                  type="project"
                  data={project}
                />
              )
          )}
        </ProjectList>
      )}

      <_FlexCenter>
        <Button
          as="button"
          variant="outline"
          onClick={() => setTab('themes')}
          disabled={tab === 'themes'}
        >
          Themes
        </Button>
        <Button
          as="button"
          variant="outline"
          onClick={() => setTab('projects')}
          disabled={tab === 'projects'}
        >
          Projects
        </Button>
      </_FlexCenter>
    </Container>
  )
}

const _FlexCenter = styled.div`
  display: flex;
  justify-content: center;

  ${Button} {
    margin: 0.375rem;
  }
`
