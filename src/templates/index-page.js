import React from "react"
import { Container,Row,Col } from "react-bootstrap"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import Layout from "../components/layout"

export const IndexPageTemplate = ({
  image1,
  altImage1,
  image2,
  altImage2,
  title,
  heading,
  subheading,
}) => (

  <div>
    <Container>
    <Row>
        <Col md={4} sm={4} xs={4} style={{ paddingRight: 20 }}>
          <Row>
            <Col md={6} sm={6} xs={6}>
              <Link to="/about">
              <img className="header-image" src={image1} alt={altImage1}/>
              </Link>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <Link to="/about">
              <img className="header-image" src={image2} alt={altImage2} />
              </Link>
            </Col>
          </Row>
          <Row>
            <Col md={6} sm={6} xs={6}>
            <img className="header-image" src={image1} alt={altImage1}/>
            </Col>
            <Col md={6} sm={6} xs={6}>
            <img className="header-image" src={image2} alt={altImage2}/>
            </Col>
          </Row>
          <Row>
            <Col md={6} sm={6} xs={6}>
            <img className="header-image" src={image1} alt={altImage1}/>
            </Col>
            <Col md={6} sm={6} xs={6}>
            <img className="header-image" src={image2} alt={altImage2}/>
            </Col>
          </Row>
        </Col>
        <Col md={8} sm={8} xs={8} style={{ paddingLeft: 100 }}>
          <Row md={8} sm={8} xs={8}>
            <img className="header-image" src={image1} alt={altImage1}/>
          </Row>
          <Row md={8} sm={8} xs={8}>
            <img className="header-image" src={image2} alt={altImage2}/>
          </Row>
          <Row md={8} sm={8} xs={8}>
            <img className="header-image" src={image1} alt={altImage1}/>
          </Row>
          <Row md={8} sm={8} xs={8}>
            <img className="header-image" src={image2} alt={altImage2}/>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
)

IndexPageTemplate.propTypes = {
  image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  altImage1: PropTypes.string,
  image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  altImage2: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image1={frontmatter.image1.image}
        altImage1={frontmatter.image1.alt}
        image2={frontmatter.image2.image}
        altImage2={frontmatter.image2.alt}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image1 {
          alt
          image
        }
        image2 {
          alt
          image
        }
        heading
        subheading
      }
    }
  }
`