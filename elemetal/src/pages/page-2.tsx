import {Link} from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Honor The Machine</h1>
    <p>Welcome to page 2</p>
    <Link to="/"> </Link>
  </Layout>
)

export default SecondPage
