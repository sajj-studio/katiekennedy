import React, { FC } from 'react'
import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { ProjectList } from '../components/project-list'
import { Jumbotron } from '../components/jumbotron'

const IndexPage: FC = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron />
    <ProjectList />
  </Layout>
)

export default IndexPage
