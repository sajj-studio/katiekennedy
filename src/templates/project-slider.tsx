import React, { FC } from 'react'
import ImageGallery from 'react-image-gallery'
import { graphql, Link, PageProps } from 'gatsby'
import { ProjectSliderPageQuery } from '../graphqlTypes'
import Img from 'gatsby-image'
import 'react-image-gallery/styles/css/image-gallery.css'
import { GlobalStyles } from '../components/global-styles'
import styled, { css, ThemeProvider } from 'styled-components'
import { theme } from '../components/sc-theme'
import { notEmpty } from '../util/notEmpty'
import { Typography } from '../components/typography'

export interface ProjectSliderPageContext {
  id: string
}

const ProjectSliderPage: FC<
  PageProps<ProjectSliderPageQuery, ProjectSliderPageContext>
> = ({ data: { contentfulProject: project } }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <_CloseIcon to={`/project/${project?.slug}`} />
        <GlobalStyles />
        <_Container>
          {project?.photos && (
            <_GalleryWrapper>
              <ImageGallery
                showFullscreenButton={false}
                infinite
                showPlayButton={false}
                showBullets
                showThumbnails={false}
                showNav
                showIndex={false}
                items={project?.photos?.filter(notEmpty)?.map(photo => ({
                  original: photo.localFile?.childImageSharp?.fluid?.src ?? '',
                  renderItem: () => (
                    <_ItemWrapper>
                      <div style={{ width: '100%' }}>
                        <Img
                          //@ts-ignore
                          fluid={photo.localFile?.childImageSharp?.fluid}
                        />
                      </div>
                    </_ItemWrapper>
                  ),
                }))}
              />
            </_GalleryWrapper>
          )}
          <_AlignCenter>
            <Typography variant="body" color="white">
              {project?.description?.description}
            </Typography>
          </_AlignCenter>
        </_Container>
      </ThemeProvider>
    </>
  )
}

const _CloseIcon: FC<{ to: string }> = ({ to }) => (
  <_Close to={to}>
    <_Line position="top" />
    <_Line position="bottom" />
  </_Close>
)
const _Close = styled(Link)`
  height: 1.875rem;
  width: 2.375rem;
  z-index: 105;
  margin: 0.5rem 1rem 0 0;
  position: fixed;
  top: 1rem;
  right: 0.2rem;
`
const _Line = styled.div<{ position: 'top' | 'bottom' }>`
  position: absolute;
  display: block;
  width: 100%;
  height: 0.1875rem;
  background: grey;
  border-radius: 0.125rem;
  transition: 0.2s;

  ${({ position }) => {
    switch (position) {
      case 'top':
        return css`
          transform: rotate(45deg);
          top: calc(50% - 0.1875rem);
        `
      case 'bottom':
        return css`
          transform: rotate(-45deg);
          top: calc(50% - 0.1875rem);
        `
    }
  }}
`
const _Container = styled.div`
  background-color: #1d1d1d;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.25rem;
`
const _GalleryWrapper = styled.div`
  max-height: 80vh;
`
const _ItemWrapper = styled.div`
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const _AlignCenter = styled.div`
  text-align: center;
`

export default ProjectSliderPage

export const query = graphql`
  query ProjectSliderPage($id: String!) {
    contentfulProject(id: { eq: $id }) {
      slug
      description {
        description
      }
      photos {
        localFile {
          childImageSharp {
            fluid {
              src
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
