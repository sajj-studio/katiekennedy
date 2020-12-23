import React, { FC } from 'react'
import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { Jumbotron } from '../components/jumbotron'
import { Featured } from '../components/featured'
import { SectionTitle } from '../components/section-title'

const IndexPage: FC = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron />
    <SectionTitle color="pink">Different angles</SectionTitle>
    <Featured />
  </Layout>
)

export default IndexPage
