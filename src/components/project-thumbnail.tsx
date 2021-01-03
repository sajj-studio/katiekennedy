import React, { FC } from 'react'
import { graphql, Link } from 'gatsby'
import {
  ProjectThumbnailFragment,
  ThemeThumbnailFragment,
} from '../graphqlTypes'
import styled, { css } from 'styled-components'
import { Typography } from './typography'
import Image from 'gatsby-image'

export const fragments = graphql`
  fragment ProjectThumbnail on ContentfulProject {
    id
    coverImage {
      ...ThumbnailAsset
    }
    slug
    title
  }

  fragment ThemeThumbnail on ContentfulTheme {
    id
    coverImage {
      ...ThumbnailAsset
    }
    slug
    title
  }

  fragment ThumbnailAsset on ContentfulAsset {
    localFile {
      childImageSharp {
        fluid(
          sizes: "(min-width: 768px) 171px, 91px"
          srcSetBreakpoints: [91, 171]
          maxWidth: 171
          maxHeight: 171
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
  <Thumbnail>
    <StyledLink to={`/${type}/${slug}`}>
      <_ImageContainer>
        <Image
          //@ts-ignore
          fluid={coverImage?.localFile?.childImageSharp?.fluid}
          alt={`${title} cover`}
        />
      </_ImageContainer>
      <Typography variant="body" color="brown">
        {title}
      </Typography>
    </StyledLink>
  </Thumbnail>
)

const StyledLink = styled(Link)`
  display: inline-block;
`

const Thumbnail = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin: 0 0.75rem;

    ${theme.media.desktop} {
      margin: 1rem;
    }
  `}
`
const _ImageContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 5.6875rem;
    overflow: hidden;
    box-shadow: 0 0 0 3px ${theme.colors.white}, 0 0 0 4px ${theme.colors.beige};
    border-radius: 50%;
    margin-bottom: 0.5rem;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
    }

    ${theme.media.desktop} {
      width: 10.6875rem;
    }
  `}
`
