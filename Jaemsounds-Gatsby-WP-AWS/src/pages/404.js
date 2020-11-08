import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// styling
import { Wrapper, CardWrapper } from '../templates/templateStyles'
const NotFoundPage = () => (
  <Layout>
    <Wrapper>
      <CardWrapper>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </CardWrapper>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
