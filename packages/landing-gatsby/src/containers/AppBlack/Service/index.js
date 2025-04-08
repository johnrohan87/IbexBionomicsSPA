import { useStaticQuery, graphql } from 'gatsby'
import Box from 'common/components/Box'
import Heading from 'common/components/Heading'
import Image from 'common/components/Image'
import GatsbyImage from 'common/components/GatsbyImage'
import Text from 'common/components/Text'
import Container from 'common/components/UI/Container'
import React from 'react'
import { Fade } from 'react-reveal'
import ServiceWrapper, {
  ContentWrapper,
  ServiceItemsWrapper,
  ImageWrapper,
} from './service.style'
// import { Waypoint } from 'react-waypoint'

function Service({ setImg }) {
  const Data = useStaticQuery(graphql`
    query {
      appBlackJson {
        SERVICE_DATA {
          sectionImage {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
          screenImage {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
          title
          text
          serviceItems {
            icon {
              publicURL
            }
            title
          }
        }
      }
    }
  `)
  const { title, text, sectionImage, serviceItems } =
    Data.appBlackJson.SERVICE_DATA

  return (
    <ServiceWrapper id='service_section'>
      <Container>
        <ContentWrapper>
          <Fade left>
            <Heading as='h2' content={title} className='section-title' />
            <Text as='p' content={text} className='paragraph' />

            <ServiceItemsWrapper>
              {serviceItems.map((item, index) => (
                <Box
                  className='service-item'
                  key={`quality-features-key-${index}`}
                >
                  <Box className='service-item-icon-holder'>
                    <Image
                      src={item?.icon?.publicURL}
                      alt={item?.title}
                      className='service-item-icon'
                    />
                  </Box>
                  <Text
                    as='p'
                    className='service-item-title'
                    content={item?.title}
                  />
                </Box>
              ))}
            </ServiceItemsWrapper>
          </Fade>
        </ContentWrapper>

        {/* <Waypoint onEnter={() => setImg(screenImage)} /> */}

        <ImageWrapper>
          <Fade right>
            <GatsbyImage
              src={
                (sectionImage !== null) | undefined
                  ? sectionImage.childImageSharp.gatsbyImageData
                  : {}
              }
              alt=''
              className='image'
            />
          </Fade>
        </ImageWrapper>
      </Container>
    </ServiceWrapper>
  )
}

export default Service
