import React, { FC } from 'react'
import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { HomeJumbotron } from '../components/home-jumbotron'
import { Featured } from '../components/featured'
import { SectionTitle } from '../components/section-title'
import { AboutMe } from '../components/about-me'
import { LatestWork } from '../components/latest-work'
import { Container } from '../components/container'

const IndexPage: FC = () => (
  <Layout>
    <SEO title="Home" />
    <HomeJumbotron />

    <Container>
      <SectionTitle color="pink">Different angles</SectionTitle>
      <Featured />
    </Container>

    <Container>
      <SectionTitle color="pink">About me</SectionTitle>
      <AboutMe />
    </Container>

    <Container>
      <SectionTitle color="pink">Latest work</SectionTitle>
      <LatestWork />
    </Container>
  </Layout>
)

export default IndexPage
