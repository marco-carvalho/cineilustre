import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        <h2>Notícias</h2>
        <div className="row">
          {posts
            .map(({ node: post }) => (
              <div className="col-md-4 mb-3" key={post.id}>
                <div className="card">
                  <Link to={post.fields.slug}>
                    <img className="img-fluid" src={post.frontmatter.image} alt=""/>
                  </Link>
                  <div className="card-body">
                    <div className="font-weight-bold text-uppercase">{post.frontmatter.title}</div>
                    <div>{post.frontmatter.subtitle}</div>
                    <small className="text-secondary">
                      <span className="mr-1">por</span>
                      <Link to="/contato">{post.frontmatter.author}</Link>
                    </small>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query NoticiasQuery {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex : "/(noticias)/"}
      },
      sort: { fields: [frontmatter___date], order: DESC}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            image
            date
            title
            subtitle
            author
          }
        }
      }
    }
  }
`