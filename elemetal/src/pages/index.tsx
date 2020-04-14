import React from "react"
import { Link, graphql } from "gatsby"
import './styles.css'
import About from "./About/About"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
//Yve Vestal Titan (YVT Create Logo)
import '../../node_modules/augmented-ui/augmented.css'; 
//augmented ui
//Homepage 

interface iProps {
  data: {
    allMarkdownRemark: any
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}
const IndexPage = ({ data }: iProps) => (
  const siteTitle = data.site.siteMetadata.title 
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={window.location} title={siteTitle}>
    <SEO title="Yve Vestal Titan" keywords={[`react`,`developer`,`savage`,`javascript`,`gatsby`,`angiechangpagne`,`open-source`,`los-angeles`,`builtinla`]} />
    <h1> Angie Chang </h1>
    <p> Welcome to The Digital Ether </p>
    <About />
    <p></p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/"></Link>
  </Layout>
  )
)

export default IndexPage


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order DESC}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formateString:"MMMM DD YYYY")
            title
            descript
          }
        }
      }
    }
  }
`