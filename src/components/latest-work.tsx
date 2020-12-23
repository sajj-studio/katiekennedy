import React, { FC } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { LatestWorkQuery } from '../graphqlTypes'
import { Container } from './container'
import { Typography } from './typography'
import styled, { css } from 'styled-components'
import { Gallery } from './gallery'

export const query = graphql`
  query LatestWork {
    contentfulHomepageLatestWork {
      project {
        slug
        title
        description {
          description
        }
      }
      featuredPhotos {
        ...Gallery
      }
    }
  }
`

export const LatestWork: FC = () => {
  const {
    contentfulHomepageLatestWork: data,
  } = useStaticQuery<LatestWorkQuery>(query)

  return (
    <Container>
      <Typography
        as={Link}
        to={`/project/${data?.project?.slug}`}
        variant="subtitle"
        color="brown"
      >
        {data?.project?.title} →
      </Typography>
      <_Line />
      <Typography variant="body" color="brown">
        {data?.project?.description?.description}
      </Typography>
      {data?.featuredPhotos && <Gallery photos={data?.featuredPhotos} />}
    </Container>
  )
}

const _Line = styled.hr`
  ${({ theme }) => css`
    margin: 0.40625rem -1.25rem;
    border-top: 1px dashed ${theme.colors.brown};
  `}
`
