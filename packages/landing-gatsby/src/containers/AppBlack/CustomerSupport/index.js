import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import GatsbyImage from 'common/components/GatsbyImage'
import Container from 'common/components/UI/ContainerTwo'
import Heading from 'common/components/Heading'
import Text from 'common/components/Text'
import SectionWrapper, {
  ContentWrapper,
  SectionBodyWrapper,
  ImageWrapper,
} from './customerSupport.style'
// import messenger from 'common/assets/image/appBlack/messenger.png'
import Box from 'common/components/Box'
import { Fade } from 'react-reveal'

const CustomerSupport = () => {
  const data = useStaticQuery(graphql`
    query {
      messenger: file(relativePath: { eq: "image/appBlack/messenger.png" }) {
        childImageSharp {
          gatsbyImageData(width: 675, placeholder: BLURRED)
        }
      }
    }
  `)

  return (
    <SectionWrapper>
      <Container>
        <ImageWrapper>
          <Fade left>
            <GatsbyImage
              src={
                (data.messenger !== null) | undefined
                  ? data.messenger.childImageSharp.gatsbyImageData
                  : {}
              }
              alt='messenger'
            />
          </Fade>
        </ImageWrapper>
        <ContentWrapper>
          <Fade left>
            <Heading
              content='Customer support is our main priority with smile'
              className='section-title'
            />
            <Text
              content='Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system.'
              className='section-description'
            />

            <SectionBodyWrapper>
              <Box className='section-body'>
                <span>Up to</span>
                <span className='percentage'>
                  <span className='percentage-number'>80</span>
                  <span className='percentage-icon'>%</span>
                </span>
                <span>Customer Response</span>
              </Box>
              <Box className='section-body'>
                <span>Consistent</span>
                <span className='percentage'>
                  <span className='percentage-number'>99</span>
                  <span className='percentage-icon'>%</span>
                </span>
                <span>Performance Score</span>
              </Box>
            </SectionBodyWrapper>
          </Fade>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  )
}

export default CustomerSupport
