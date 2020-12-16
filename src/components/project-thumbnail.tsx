import React, { FC } from 'react'
import { graphql, Link } from 'gatsby'
import { ProjectFragment } from '../graphqlTypes'
import styled, { css } from 'styled-components'
import { Typography } from './typography'

export const Project = graphql`
  fragment Project on ContentfulProject {
    title
    slug
    coverImage {
      localFile {
        childImageSharp {
          fluid(maxHeight: 171, maxWidth: 171) {
            src
          }
        }
      }
    }
  }
`
interface ProjectThumbnailProps {
  project: ProjectFragment
}

export const ProjectThumbnail: FC<ProjectThumbnailProps> = ({
  project: { coverImage, title, slug },
}) => (
  <_Category>
    <Link to={`/project/${slug}`}>
      <_ImageContainer>
        <img
          src={coverImage?.localFile?.childImageSharp?.fluid?.src}
          alt={`${title} cover`}
        />
      </_ImageContainer>
      <Typography variant="body" color="brown">
        {title}
      </Typography>
    </Link>
  </_Category>
)

const _Category = styled.div`
  width: 5.6875rem;
  padding: 0 0.5rem;
  text-align: center;
`
const _ImageContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    max-width: 5.6875rem;
    padding-bottom: 100%;
    overflow: hidden;
    box-shadow: 0 0 0 3px ${theme.colors.white}, 0 0 0 4px ${theme.colors.beige};
    border-radius: 50%;
    margin-bottom: 0.5rem;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `}
`
