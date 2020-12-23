import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { GalleryFragment } from '../graphqlTypes'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'

export const fragment = graphql`
  fragment Gallery on ContentfulAsset {
    id
    localFile {
      childImageSharp {
        fluid(maxWidth: 585, maxHeight: 242) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

interface GalleryProps {
  photos: (GalleryFragment | null | undefined)[]
}

export const Gallery: FC<GalleryProps> = ({ photos }) => {
  return (
    <_Container>
      {photos.map(
        (photo, i) =>
          photo && (
            <_PhotoWrap key={photo.id} fullWidth={i % 3 === 0}>
              {/*
              //@ts-ignore */}
              <_Img fluid={photo?.localFile?.childImageSharp?.fluid} />
            </_PhotoWrap>
          )
      )}
    </_Container>
  )
}

const _Container = styled.div`
  margin: 1.25rem -1.95rem;
  display: flex;
  flex-wrap: wrap;
`

const _Img = styled(Img)``
const _PhotoWrap = styled.div<{ fullWidth: boolean }>`
  ${({ fullWidth }) => css`
    padding: 0.75rem;
    width: 50%;
    box-sizing: border-box;
    height: 10.8125rem;

    ${fullWidth &&
    css`
      width: 100%;
    `}

    position: relative;
    ${_Img} {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 100%;
    }
  `}
`
