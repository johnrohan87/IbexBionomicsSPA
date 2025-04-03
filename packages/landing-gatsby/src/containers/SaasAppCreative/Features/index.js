import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Box from 'common/components/Box';
import Section, { SectionHeading, Grid, FeatureCard } from './features.style';

const Features = () => {
  const data = useStaticQuery(graphql`
    query {
      saasAppCreativeJson {
        features {
          id
          title
          text
          icon {
            publicURL
          }
        }
      }
    }
  `);
  const features = data.saasAppCreativeJson.features;
  return (
    <Section id="features">
      <Container width="1360px">
        <SectionHeading>
          <Text content="Key selling points" />
          <Heading content="What the features of product" />
        </SectionHeading>
        <Grid>
          {features.map((feature) => (
            <FeatureCard key={feature.id}>
              <Image src={feature.icon.publicURL} alt="feature icon" />
              <Box>
                <Heading as="h4" content={feature.title} />
                <Text as="p" content={feature.text} />
              </Box>
            </FeatureCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Features;
