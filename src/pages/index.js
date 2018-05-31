import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        <div className="row">
          <div className="col-md-8 mb-3">
            <div className="carousel slide" id="carouselExampleIndicators" data-ride="carousel">
              <ol className="carousel-indicators">
                <li className="active" data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                {posts
                  .map(({ node: post }, index) => (
                    <div className={"carousel-item " + (index == 0 ? "active" : "")} key={post.id}>
                      <Link to={post.fields.slug}>
                        <img className="d-block w-100" src={post.frontmatter.image} alt="" style={{filter: "brightness(.5)"}}/>
                        <div className="carousel-caption d-none d-md-block">
                          <h3>{post.frontmatter.title}</h3>
                          <p>{post.frontmatter.subtitle}</p>
                        </div>
                      </Link>
                    </div>
                  ))
                  .slice(0,3)
                }
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcineilustre%2F&amp;tabs=timeline&amp;width=340&amp;height=500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=true&amp;show_facepile=true&amp;appId" width="100%" height="300" style={{border:"none", overflow:"hidden"}} scrolling="no" frameBorder="0" allowTransparency="true"></iframe>
          </div>
        </div>
        <h5 className="font-weight-bold text-uppercase bg-dark text-white p-2 rounded mb-3">Últimas Críticas</h5>
        <div className="row">
          {posts
            .filter(post => post.node.fields.slug.includes("/criticas/"))
            .map(({ node: post }) => (
              <div className="col-md-4 mb-3" key={post.id}>
                <div className="card">
                  <Link to={post.fields.slug}>
                    <img className="img-fluid" src={post.frontmatter.image}/>
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
            .slice(0,3)
          }
        </div>
        <h5 className="font-weight-bold text-uppercase bg-dark text-white p-2 rounded mb-3">Matérias Especiais</h5>
        <div className="row">
          {posts
            .filter(post => post.node.fields.slug.includes("/materias/"))
            .map(({ node: post }) => (
              <div className="col-md-6" key={post.id}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <Link to={post.fields.slug}>
                      <img className="w-100" src={post.frontmatter.image}/>
                    </Link>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="font-weight-bold text-uppercase">{post.frontmatter.title}</div>
                    <div className="small text-secondary self-align-end">
                      <span className="mr-1">por</span>
                      <Link to="/contato">{post.frontmatter.author}</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
            .slice(0,2)
          }
        </div>
        <h5 className="font-weight-bold text-uppercase bg-dark text-white p-2 rounded mb-3">Notícias</h5>
        {posts
          .filter(post => post.node.fields.slug.includes("/noticias/"))
          .map(({ node: post }) => (
            <div className="row" key={post.id}>
              <div className="col-md-2 mb-3">
                <Link to={post.fields.slug}>
                  <img className="w-100" src={post.frontmatter.image}/>
                </Link>
              </div>
              <div className="col-md-10 mb-3">
                <div className="font-weight-bold text-uppercase">{post.frontmatter.title}</div>
                <p className="m-0">{post.frontmatter.subtitle}</p>
                <small className="text-secondary">
                  <span className="mr-1">por</span>
                  <Link to="/contato">{post.frontmatter.author}</Link>
                </small>
              </div>
            </div>
          ))
          .slice(0,3)
        }
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
  query IndexQuery {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex : "/(criticas|materias|noticias)/"}
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
            date
            image
            title
            subtitle
            author
          }
        }
      }
    }
  }
`