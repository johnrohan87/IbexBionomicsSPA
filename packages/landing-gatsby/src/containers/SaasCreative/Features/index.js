import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/components/UI/Container';
import Image from 'common/components/Image';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Section, { SectionHeading, Grid, Item } from './features.style';

const Features = () => {
  const data = useStaticQuery(graphql`
    query {
      saasCreativeJson {
        features {
          id
          icon {
            publicURL
          }
          title
          description
        }
      }
    }
  `);
  const features = data.saasCreativeJson.features;
  return (
    <Section id="features">
      <Container width="1400px">
        <SectionHeading>
          <Heading content="So How Does UserPlace Work ?" />
          <Text content="See some of the features below and learn why businesses trust UserPlace" />
        </SectionHeading>
        <Grid>
          {features.map((feature) => (
            <Item key={feature.id}>
              <figure>
                <Image src={feature.icon.publicURL} alt="icon" />
              </figure>
              <Heading as="h4" content={feature.title} />
              <Text content={feature.description} />
            </Item>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Features;
