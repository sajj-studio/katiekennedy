import React, { FC } from 'react'
import { graphql, Link } from 'gatsby'
import {
  ProjectThumbnailFragment,
  ThemeThumbnailFragment,
} from '../graphqlTypes'
import styled, { css } from 'styled-components'
import { Typography } from './typography'

export const fragments = graphql`
  fragment ProjectThumbnail on ContentfulProject {
    id
    coverImage {
      localFile {
        childImageSharp {
          fixed(height: 91, width: 91) {
            src
          }
        }
      }
    }
    slug
    title
  }

  fragment ThemeThumbnail on ContentfulTheme {
    id
    coverImage {
      localFile {
        childImageSharp {
          fixed(height: 91, width: 91) {
            src
          }
        }
      }
    }
    slug
    title
  }
`

interface ProjectThumbnailProps {
  type: 'project' | 'theme'
  data: ProjectThumbnailFragment | ThemeThumbnailFragment
}

export const ProjectThumbnail: FC<ProjectThumbnailProps> = ({
  type,
  data: { coverImage, title, slug },
}) => (
  <_Category>
    <Link to={`/${type}/${slug}`}>
      <_ImageContainer>
        <img
          src={coverImage?.localFile?.childImageSharp?.fixed?.src}
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
  ${({ theme }) => css`
    width: 5.6875rem;
    padding: 0 0.5rem;
    text-align: center;

    ${theme.media.desktop} {
      width: 10rem;
    }
  `}
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

    ${theme.media.desktop} {
      max-width: 10rem;
    }
  `}
`
