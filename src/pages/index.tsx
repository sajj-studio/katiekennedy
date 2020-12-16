import React, { FC } from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { ProjectList } from '../components/project-list'

const IndexPage: FC = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <ProjectList />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
