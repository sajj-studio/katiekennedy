import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { AboutMeQuery } from '../graphqlTypes'
import { Container } from './container'
import Img from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { Typography } from './typography'

export const query = graphql`
  query AboutMe {
    contentfulHomepageAboutMe {
      text {
        raw
      }
      image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 585) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export const AboutMe: FC = () => {
  const data = useStaticQuery<AboutMeQuery>(query)

  return (
    <Container>
      <Img
        //@ts-ignore
        fluid={
          data.contentfulHomepageAboutMe?.image?.localFile?.childImageSharp
            ?.fluid
        }
      />
      {documentToReactComponents(
        JSON.parse(data.contentfulHomepageAboutMe?.text?.raw ?? '{}'),
        {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (_, children) => (
              <Typography variant="body" color="pink">
                {children}
              </Typography>
            ),
          },
        }
      )}
    </Container>
  )
}
