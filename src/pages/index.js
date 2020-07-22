import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RightArrow from "../components/rightArrow"
import { Jumbotron, Container, Card } from "react-bootstrap"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 768,
          textAlign: `center`
        }}
      >
        <h1>Custom Built Software</h1>
        <p>I help businesses implement custom-built software programs to improve efficiency and overall effectiveness.</p>
        <Link className="btn btn-primary btn-lg mt-4" to="/articles/welcome/">Learn More <RightArrow /></Link>
        <small className="text-muted d-block my-3">Or <Link to="/contact/">Contact Me</Link> if you have a question.</small>
      </div>
    </Jumbotron>
    <Container>
      <div className="p-3">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Card key={node.id} className="mb-4">
            <Card.Header>{node.frontmatter.category}</Card.Header>
            <Card.Body>
              <Card.Title>{node.frontmatter.title}</Card.Title>
              <Card.Text>{node.excerpt}</Card.Text>
              <Link className="stretched-link" to={node.fields.slug}>Read More <RightArrow /></Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(limit:5) {
      edges {
        node {
          id
          frontmatter {
            title
            author
            category
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
