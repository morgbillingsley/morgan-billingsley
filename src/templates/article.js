import React from "react"
import { graphql } from "gatsby"
import ArticleLayout from "../components/articleLayout"

const Article = ({ data }) => {
    const post = data.markdownRemark
    return (
        <ArticleLayout>
            <article className="p-3">
                <div className="mb-4">
                    <h1>{post.frontmatter.title}</h1>
                    <small>
                        by {post.frontmatter.author} on {post.frontmatter.date} | {post.frontmatter.category} 
                    </small>
                </div>
                <div dangerouslySetInnerHTML={{__html: post.html}}></div>
            </article>
        </ArticleLayout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date(formatString: "MMM DD, YYYY")
        category
      }
    }
  }
`

export default Article