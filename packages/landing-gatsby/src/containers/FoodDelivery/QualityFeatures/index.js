import React from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Box from 'common/components/Box';
import QualityFeaturesWrapper from './qualityFeatures.style';
const QualityFeatures = () => {
  const Data = useStaticQuery(graphql`
    query {
      foodDeliveryJson {
        QUALITY_FEATURES_DATA {
          title
          posts {
            icon {
              publicURL
            }
            title
            text
          }
        }
      }
    }
  `);
  const { title, posts } = Data.foodDeliveryJson.QUALITY_FEATURES_DATA;
  return (
    <QualityFeaturesWrapper id="features">
      <Container>
        <Heading as="h2" content={title} />
        <Box className="postWrap">
          {posts.map(({ icon, title, text }, index) => (
            <Box className="post" key={`quality-features-key-${index}`}>
              <Fade bottom cascade>
                <Image src={icon.publicURL} alt={title} />
                <Heading as="h3" content={title} />
                <Text as="p" content={text} />
              </Fade>
            </Box>
          ))}
        </Box>
      </Container>
    </QualityFeaturesWrapper>
  );
};

export default QualityFeatures;
