import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import GatsbyImage from 'common/components/GatsbyImage'
import Fade from 'react-reveal/Fade'
import Container from 'common/components/UI/Container'
import Text from 'common/components/Text'
import Heading from 'common/components/Heading'

import Box from 'common/components/Box'
import ProductDeliveryWrapper, {
  ContentWrapper,
  ImageWrapper,
  PostsWrapper,
} from './productDelivery.style'

// import { Waypoint } from 'react-waypoint'

const ProductDelivery = ({ setImg }) => {
  const Data = useStaticQuery(graphql`
    query {
      appBlackJson {
        DELIVERY_PRODUCT_DATA {
          screenImage {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
          sectionContent {
            image {
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
          }
          posts {
            title
            text
          }
        }
      }
    }
  `)

  const { sectionContent, posts } = Data.appBlackJson.DELIVERY_PRODUCT_DATA
  const { title, text, image } = sectionContent
  return (
    <ProductDeliveryWrapper>
      <Container>
        <ContentWrapper>
          <Fade left>
            <Heading as='h2' content={title} className='section-title' />
            <Text as='p' content={text} className='section-description' />
            <PostsWrapper>
              {posts.map((post, index) => (
                <Box
                  className='post'
                  key={`product-delivery-post-key-${index}`}
                >
                  <Box className='post-content'>
                    <Heading
                      as='h3'
                      content={post?.title}
                      className='post-title'
                    />
                    <Text
                      as='p'
                      content={post?.text}
                      className='post-description'
                    />
                  </Box>
                </Box>
              ))}
            </PostsWrapper>
          </Fade>
        </ContentWrapper>

        {/* <Waypoint onEnter={() => setImg(screenImage)} /> */}

        <ImageWrapper>
          <Fade left>
            <GatsbyImage
              src={
                (image !== null) | undefined
                  ? image.childImageSharp.gatsbyImageData
                  : {}
              }
              alt={title}
              className='image'
            />
          </Fade>
        </ImageWrapper>
      </Container>
    </ProductDeliveryWrapper>
  )
}

export default ProductDelivery
