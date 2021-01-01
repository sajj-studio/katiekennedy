import React, { FC } from 'react'
import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { HomeJumbotron } from '../components/home-jumbotron'
import { Featured } from '../components/featured'
import { SectionTitle } from '../components/section-title'
import { AboutMe } from '../components/about-me'
import { LatestWork } from '../components/latest-work'
import { Container } from '../components/container'
import { ActivePageContext } from '../contexts/active-page'
import styled, { css } from 'styled-components'

const IndexPage: FC = () => (
  <ActivePageContext.Provider value="home">
    <Layout>
      <SEO title="Home" />
      <HomeJumbotron />

      <Container>
        <Featured />
      </Container>

      <_AnchorOffset>
        <div id="about-me" />
      </_AnchorOffset>
      <AboutMe />

      <_AnchorOffset>
        <div id="latest-work" />
      </_AnchorOffset>
      <Container>
        <SectionTitle color="pink">Latest work</SectionTitle>
        <LatestWork />
      </Container>
    </Layout>
  </ActivePageContext.Provider>
)

export default IndexPage

const _AnchorOffset = styled.div`
  ${({ theme }) => css`
    position: relative;

    div {
      position: absolute;
      top: -${theme.sizing.headerHeight};
    }
  `}
`
