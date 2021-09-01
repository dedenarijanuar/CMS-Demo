import React from "react"
import "../styles/bootstrap/bootstrap.min.css"
import { Container,Row,Col } from "react-bootstrap"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

export const PeoplePageTemplate = ({
    image1,
    altImage1,
    image2,
    altImage2,
    title,
    heading,
    subheading,
    subheading2,
  }) => (
      <div>
          <h1>{title}</h1>
          <Container>
              <Row>
                  <Col md={6} sm={6} xs={6}>
                    <image scr={image1} alt={altImage1}/>
                  </Col>
                  <Col md={6} sm={6} xs={6}>
                    <p>{subheading}</p>
                  </Col>
              </Row>
              <Row>
                  <Col md={6} sm={6} xs={6}>
                    <image scr={image2} alt={altImage2}/>
                  </Col>
                  <Col md={6} sm={6} xs={6}>
                    <p>{subheading2}</p>
                  </Col>
              </Row>
          </Container>
      </div>
  )

  PeoplePageTemplate.propTypes = {
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    altImage1: PropTypes.string,
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    altImage2: PropTypes.string,
    title: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    subheading2: PropTypes.string
  }
  
  const PeoplePage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
  
    return (
      <Layout>
        <PeoplePageTemplate
          image1={frontmatter.main.image1.image}
          altImage1={frontmatter.main.image1.alt}
          image2={frontmatter.main.image2.image}
          altImage2={frontmatter.main.image2.alt}
          title={frontmatter.title}
          heading={frontmatter.heading}
          subheading={frontmatter.subheading}
          subheading2={frontmatter.subheading2}
        />
      </Layout>
    )
  }
  
  PeoplePage.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object,
      }),
    }),
  }
  
  export default PeoplePage

  export const pageQuery = graphql`
  query PeoplePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "people-page" } }) {
      frontmatter {
        title
        main {
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
        }
        heading
        subheading
        subheading2
      }
    }
  }
  `