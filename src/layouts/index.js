import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome";
import "@fortawesome/fontawesome-free-solid/";
import "@fortawesome/fontawesome-free-brands/";
import './index.css'

import Header from '../components/header'
import Footer from '../components/footer'

const Layout = ({ children, data }) => (
  <div className="container">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="pt-br" />
    </Helmet>
    <div className="sticky-top bg-white">
      <Header/>
    </div>
    <div>
      {children()}
    </div>
    <Footer/>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
