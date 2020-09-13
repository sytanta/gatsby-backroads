import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import StyledHero from "../components/StyledHero"
import Tours from "../components/Tours/Tours"

export default class tours extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Tours" />
        <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} />
        <Tours />
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { regex: "/defaultBcg/" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
