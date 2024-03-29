import React, { FC, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ProjectThumbnail } from './project-thumbnail'
import { FeaturedQuery } from '../graphqlTypes'
import { ProjectList } from './project-list'
import { Button } from './button'
import styled, { css } from 'styled-components'
import { SectionTitle } from './section-title'

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
    <>
      <_TextCenter>
        <SectionTitle color="pink">Different angles</SectionTitle>
      </_TextCenter>

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
    </>
  )
}

const _TextCenter = styled.div`
  ${({ theme }) =>
    css`
      ${theme.media.desktop} {
        text-align: center;
      }
    `}
`

const _FlexCenter = styled.div`
  display: flex;
  justify-content: center;

  ${Button} {
    margin: 0.375rem;
  }
`
