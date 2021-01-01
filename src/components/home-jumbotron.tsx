import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { HomeJumbotronQuery } from '../graphqlTypes'
import { Jumbotron } from './jumbotron'

export const query = graphql`
  query HomeJumbotron {
    contentfulHomepageJumbotron {
      text
      image {
        ...JumbotronImage
      }
    }
  }
`

export const HomeJumbotron: FC = () => {
  const data = useStaticQuery<HomeJumbotronQuery>(query)

  return (
    <Jumbotron
      image={data.contentfulHomepageJumbotron?.image}
      text={data.contentfulHomepageJumbotron?.text ?? ''}
      linkText="Explore more"
      linkTo="/gallery"
      verticalAlign="middle"
    />
  )
}
