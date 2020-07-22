import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { categorize } from "../utils/categories"
import Layout from "../components/layout"
import { Container, Row, Col, ListGroup } from "react-bootstrap"
import SmartLink from "./smartLink"

const ArticleLayout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            category
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    const categories = categorize(data.allMarkdownRemark.edges);
    return (
        <Layout>
            <Container fluid>
                <Row>
                    <Col className="d-none d-md-block border-right p-2" md={4} lg={3}>
                        {Object.keys(categories).map((category, index) => (
                            <ListGroup as="ul" variant="flush">
                                <ListGroup.Item key={index} as="li" disabled>
                                    <b>{category}</b>
                                </ListGroup.Item>
                                {categories[category].map((node) => (
                                    <SmartLink
                                        key={node.id}
                                        className="list-group-item"
                                        to={node.fields.slug}
                                    >
                                        {node.frontmatter.title}
                                    </SmartLink>
                                ))}
                            </ListGroup>
                        ))}
                    </Col>
                    <Col md={8} lg={9} style={{ minHeight: `auto` }}>
                        {children}
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default ArticleLayout