import React, { FC } from 'react'
import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { HomeJumbotron } from '../components/home-jumbotron'
import { Featured } from '../components/featured'
import { SectionTitle } from '../components/section-title'
import { AboutMe } from '../components/about-me'
import { LatestWork } from '../components/latest-work'

const IndexPage: FC = () => (
  <Layout>
    <SEO title="Home" />
    <HomeJumbotron />

    <section>
      <SectionTitle color="pink">Different angles</SectionTitle>
      <Featured />
    </section>

    <section>
      <SectionTitle color="pink">About me</SectionTitle>
      <AboutMe />
    </section>

    <section>
      <SectionTitle color="pink">Latest work</SectionTitle>
      <LatestWork />
    </section>
  </Layout>
)

export default IndexPage
