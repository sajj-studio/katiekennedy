import React, { ComponentType, FC } from 'react'
import { graphql } from 'gatsby'
import { GalleryFragment } from '../graphqlTypes'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'

export const fragment = graphql`
  fragment Gallery on ContentfulAsset {
    id
    localFile {
      childImageSharp {
        fluid(maxWidth: 585, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

interface GalleryPropsWithoutAction {
  photos: (GalleryFragment | null | undefined)[]
}
interface GalleryPropsWithAction<P> {
  photos: (GalleryFragment | null | undefined)[]
  ItemWrapper: ComponentType<P>
  itemWrapperProps: (photo: GalleryFragment) => P
}
type GalleryProps<P = unknown> =
  | GalleryPropsWithoutAction
  | GalleryPropsWithAction<P>

export function Gallery<P>({
  photos,
  ...props
}: GalleryProps<P>): ReturnType<FC<GalleryProps<P>>> {
  return (
    <_Grid>
      {photos.map(
        photo =>
          photo && (
            <_Item key={photo.id}>
              {'ItemWrapper' in props ? (
                <props.ItemWrapper {...props.itemWrapperProps(photo)}>
                  {/* 
                  //@ts-ignore */}
                  <_Image fluid={photo?.localFile?.childImageSharp?.fluid} />
                </props.ItemWrapper>
              ) : (
                //@ts-ignore
                <_Image fluid={photo?.localFile?.childImageSharp?.fluid} />
              )}
            </_Item>
          )
      )}
    </_Grid>
  )
}

const _Grid = styled.div`
  ${({ theme }) => css`
    margin: 1.25rem -1.25rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;

    ${theme.media.tablet} {
      grid-template-columns: repeat(3, 1fr);
    }
  `}
`

const _Item = styled.div`
  ${({ theme }) => css`
    height: 1px;
    padding-bottom: 56.25%;
    overflow: hidden;
    position: relative;

    ${theme.media.mobile} {
      &:nth-child(3n + 3) {
        grid-column: span 2;
      }
    }

    ${theme.media.tablet} {
      &:nth-child(6n + 2),
      &:nth-child(6n + 4) {
        grid-column: span 2;
        grid-row: span 2;
        padding-bottom: calc(56.25% + 0.625rem);
      }
    }
  `}
`

const _Image = styled(Img)`
  img {
    max-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
  }
`
