import React, { FC } from 'react'
import { Layout } from '../components/layout'
import { SectionTitle } from '../components/section-title'
import { ActivePageContext } from '../contexts/active-page'

const ContactPage: FC = () => {
  return (
    <ActivePageContext.Provider value="contact">
      <Layout>
        <SectionTitle color="white">Contact me</SectionTitle>
      </Layout>
    </ActivePageContext.Provider>
  )
}

export default ContactPage
