import React from "react";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;

  if(frontmatter.director) {
    return (
      <div>
        <h2 className="mb-3">{frontmatter.title}</h2>
        <div className="row">
          <div className="col-lg-8">
            <img src={frontmatter.image} className="w-100 mb-3"/>
            <h5 className="mb-3">{frontmatter.subtitle}</h5>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          <div className="col-lg-4">
            <h3>Direção</h3>
            <hr className='mt-0'/>
            <div className="list-inline mb-3">
              {frontmatter.director
                .map((person) => (
                  <div className="list-inline-item" key={person}>{person}</div>
                ))
              }
            </div>
            <h3>Elenco</h3>
            <hr className='mt-0'/>
            <div className="list-inline mb-3">
              {frontmatter.cast
                .map((person) => (
                  <div className="list-inline-item" key={person}>{person}</div>
                ))
              }
            </div>
            <h3>Roteiro</h3>
            <hr className='mt-0'/>
            <div className="list-inline mb-3">
              {frontmatter.screenplay
                .map((person) => (
                  <div className="list-inline-item" key={person}>{person}</div>
                ))
              }
            </div>
            <h3>Fotografia</h3>
            <hr className='mt-0'/>
            <div className="list-inline mb-3">
              {frontmatter.cinematography
                .map((person) => (
                  <div className="list-inline-item" key={person}>{person}</div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  } else if(frontmatter.image) {
    return (
      <div>
        <h2 className="mb-3">{frontmatter.title}</h2>
        <img src={frontmatter.image} className="w-100 mb-3"/>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    )
  } else {
    return (
      <div>
        <h2 className="mb-3">{frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    )
  }
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        date
        image
        title
        subtitle
        author
        director
        cast
        screenplay
        cinematography
      }
      fields {
        slug
      }
    }
  }
`;