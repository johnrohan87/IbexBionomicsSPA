import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Box from 'common/components/Box';
import GalleryWrapper from './gallery.style';
const Gallery = () => {
  const Data = useStaticQuery(graphql`
    query {
      foodDeliveryJson {
        GALLERY_DATA {
          images {
            path {
              publicURL
            }
          }
          title
          text
        }
      }
    }
  `);
  const { title, text, images } = Data.foodDeliveryJson.GALLERY_DATA;
  return (
    <GalleryWrapper>
      <Container>
        <Box className="galleryBox">
          {images.map(({ path }, index) => (
            <Box className="galleryItem" key={index}>
              <Image src={path.publicURL} alt="gallery image" />
            </Box>
          ))}
        </Box>
        <Box className="content">
          <Heading as="h2" content={title} />
          <Text as="p" content={text} />
        </Box>
      </Container>
    </GalleryWrapper>
  );
};

export default Gallery;
