import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { useFlexSearch } from "react-use-flexsearch"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchBar from "../components/searchBar"
import { Container, Jumbotron, Card } from "react-bootstrap"

const Search = ({ data, location }) => {
    const hasDefaultQuery = undefined !== location.state && null !== location.state && undefined !== location.state.query
    const defaultQuery = hasDefaultQuery ? location.state.query : null;
    const [query, setQuery] = useState(defaultQuery)
    console.log('Query is:', query)
    const { index, store } = data.localSearchArticles
    const results = useFlexSearch(query, index, JSON.parse(store))

    const submit = (value) => {
        setQuery(value)
    }

    return (
        <Layout>
            <SEO title="Search" />
            <Jumbotron className="text-center">
                <h2>Search</h2>
                <p>Use the form below to find an article on my site.</p>
                <SearchBar onSubmit={submit} defaultValue={query} />
            </Jumbotron>
            <Container>
                {results.length > 0 ? results.map(result => (
                    <Card key={result.id} className="mb-3">
                        <Card.Header>{result.category}</Card.Header>
                        <Card.Body>
                            <Card.Title>{result.title}</Card.Title>
                            <Card.Text>{result.excerpt}</Card.Text>
                            <Link className="btn btn-primary" to={result.slug}>Read More</Link>
                        </Card.Body>
                    </Card>
                )) : (
                    <div className="p-2" style={{ minHeight: 200 }}>
                        <p className="text-muted text-center">
                            Sorry, there are no articles that match your search.
                        </p>
                    </div>
                )}
            </Container>
        </Layout>
    )
}

export const searchQuery = graphql`
    {
        localSearchArticles {
            index
            store
        }
    }
`

export default Search