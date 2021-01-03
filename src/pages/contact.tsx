import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { Container } from '../components/container'
import { Layout } from '../components/layout'
import { SectionTitle } from '../components/section-title'
import { SEO } from '../components/seo'
import { ActivePageContext } from '../contexts/active-page'

const ContactPage: FC = () => {
  useEffect(() => {
    const head = document.querySelector('head') as HTMLHeadElement
    const script = document.createElement('script')
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    )
    head.appendChild(script)
  }, [])

  return (
    <ActivePageContext.Provider value="contact">
      <SEO title="Contact me" />
      <Layout>
        <FooterContainer>
          <SectionTitle color="brown">Contact me</SectionTitle>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/katiekennedy9?text_color=ab7895&primary_color=c57d75"
            style={{ height: '630px' }}
          />
        </FooterContainer>
      </Layout>
    </ActivePageContext.Provider>
  )
}

export default ContactPage

const FooterContainer = styled(Container)`
  max-width: 31.25rem;
`
