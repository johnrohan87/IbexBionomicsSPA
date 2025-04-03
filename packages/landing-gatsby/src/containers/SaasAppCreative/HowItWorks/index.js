import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Link from 'common/components/Link';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import Section, { SectionHeading, Grid, Item } from './howItWorks.style';
import rightArrow from 'common/assets/image/saasAppCreative/icons/right-arrow.svg';

const HowItWorks = () => {
  const data = useStaticQuery(graphql`
    query {
      saasAppCreativeJson {
        howTos {
          icon {
            publicURL
          }
          id
          link
          linkLabel
          text
          title
        }
      }
    }
  `);
  return (
    <Section id="how-to">
      <Container width="1360px">
        <SectionHeading>
          <Text content="Introducing our service" />
          <Heading content="Let’s explore how it works" />
        </SectionHeading>
        <Grid>
          {data.saasAppCreativeJson.howTos.map((howTo) => (
            <Item key={howTo.id}>
              <figure>
                <Image src={howTo.icon.publicURL} alt="icon" />
              </figure>
              <Heading as="h4" content={howTo.title} />
              <Text content={howTo.text} />
              <Link href={howTo.link}>
                {howTo.linkLabel}
                <img src={rightArrow} alt="right arrow icon" />
              </Link>
            </Item>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default HowItWorks;
