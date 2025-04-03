import React from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import GatsbyImage from 'common/components/GatsbyImage';
import Box from 'common/components/Box';
import ProductDeliveryWrapper from './productDelivery.style';
const ProductDelivery = () => {
  const Data = useStaticQuery(graphql`
    query {
      foodDeliveryJson {
        DELIVERY_PRODUCT_DATA {
          sectionContent {
            title
            text
            image {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          posts {
            title
            text
          }
        }
      }
    }
  `);
  const { sectionContent, posts } = Data.foodDeliveryJson.DELIVERY_PRODUCT_DATA;
  const { title, text, image } = sectionContent;
  return (
    <ProductDeliveryWrapper>
      <Container>
        <Box className="image">
          <Fade left>
            <GatsbyImage
              src={
                (image !== null) | undefined
                  ? image.childImageSharp.gatsbyImageData
                  : {}
              }
              alt={title}
            />
          </Fade>
        </Box>
        <Box className="content">
          <Heading as="h2" content={title} />
          <Text as="p" content={text} />
          <Box className="postWrap">
            {posts.map(({ title, text }, index) => (
              <Box className="post" key={`product-delivery-post-key-${index}`}>
                <Box>
                  <Heading as="h3" content={title} />
                  <Text as="p" content={text} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </ProductDeliveryWrapper>
  );
};

export default ProductDelivery;
