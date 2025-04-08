import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import GatsbyImage from 'common/components/GatsbyImage'
import Fade from 'react-reveal/Fade'
import Container from 'common/components/UI/Container'
import Heading from 'common/components/Heading'
import Text from 'common/components/Text'
import Image from 'common/components/Image'
import Box from 'common/components/Box'
import mapPin from 'common/assets/image/appBlack/banner-msg-icon.png'
import arrowIcon from 'common/assets/image/appBlack/banner-arrow.png'
import BannerWrapper, {
  ContentWrapper,
  ImageWrapper,
  EmailWrapper,
  DownloadButtonWrapper,
} from './banner.style'
// import { Waypoint } from 'react-waypoint'

const Banner = ({ setImg }) => {
  const Data = useStaticQuery(graphql`
    query {
      appBlackJson {
        BANNER_DATA {
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
          tagLine
          buttons {
            icon {
              publicURL
            }
            title
            text
            link
          }
        }
      }
    }
  `)
  const { sectionImage, title, text, tagLine, buttons } =
    Data.appBlackJson.BANNER_DATA

  return (
    <BannerWrapper id='banner_section'>
      <Container>
        <ContentWrapper>
          <Fade left>
            <Heading as='h2' content={title} className='section-title' />
            <Text as='p' className='paragraph' content={text} />
            <EmailWrapper>
              <Image className='input-icon' src={mapPin} alt={title} />
              <input
                type='text'
                placeholder='Enter Email address..'
                className='input-email'
              />
              <button className='input-button'>
                <Image src={arrowIcon} alt='banner button' />
              </button>
            </EmailWrapper>
            <Text as='p' className='tagLine' content={tagLine} />
            <DownloadButtonWrapper>
              {buttons.map((button, index) => (
                <Link to='/' key={`banner-button-${index}`}>
                  <section className='download-button'>
                    <Image
                      src={button?.icon?.publicURL}
                      width='30'
                      height='30'
                      alt={button?.title}
                      className='download-button-icon'
                    />
                    <Box className='download-button-content'>
                      <Text
                        as='span'
                        content={button?.text}
                        className='download-button-content-text'
                      />
                      <Text
                        as='p'
                        content={button?.title}
                        className='download-button-content-title'
                      />
                    </Box>
                  </section>
                </Link>
              ))}
            </DownloadButtonWrapper>
          </Fade>
        </ContentWrapper>

        <ImageWrapper>
          <Fade right>
            <GatsbyImage
              src={
                (sectionImage !== null) | undefined
                  ? sectionImage.childImageSharp.gatsbyImageData
                  : {}
              }
              alt={title}
            />
          </Fade>
        </ImageWrapper>
      </Container>
    </BannerWrapper>
  )
}

export default Banner
