import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'common/components/Box';
import Image from 'common/components/Image';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import Carousel from './carousel';
import TestimonialsArea from './testimonials.style';
const Testimonials = () => {
  const Data = useStaticQuery(graphql`
    query {
      foodDeliveryJson {
        TESTIMONIALS_DATA {
          blockImage {
            publicURL
          }
          title

          posts {
            image {
              publicURL
            }
            name
            text
            designation
          }
        }
      }
    }
  `);
  const { blockImage, title, posts } = Data.foodDeliveryJson.TESTIMONIALS_DATA;
  return (
    <TestimonialsArea id="testimonials">
      <Container>
        <Box className="mainImage">
          <Image src={blockImage.publicURL} alt={title} />
        </Box>
        <Box className="mainContent">
          <Heading as="h2" content={title} />
          <Carousel data={posts} />
        </Box>
      </Container>
    </TestimonialsArea>
  );
};

export default Testimonials;
