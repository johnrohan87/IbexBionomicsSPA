import { default as Heading, default as Text } from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Section, { Grid, Item, SectionHeading } from './services.style';

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      saasAppDarkJson {
        SERVICES {
          id
          title
          icon {
            publicURL
          }
        }
      }
    }
  `);

  const { saasAppDarkJson : SERVICES } = data;
  
  return (
    <Section id="how-to">
      <Container width="1400px">
        <SectionHeading>
          <Heading
            as="h2"
            content="Choose dashboard for every stage of your customer journey"
          />
          <Text content="The rise of mobile devices transforms the way we consume information entirely and the world's most relevant channels such as Facebook and Instagram are almost exclusively used on mobile" />
        </SectionHeading>
        <Grid>
          {SERVICES?.SERVICES?.map((service, index) => (
            <Item key={index}>
              <span className="icon">
                <i />
              </span>
              <Heading as="h4" content={service.title} />
            </Item>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Services;
