import React from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import GatsbyImage from 'common/components/GatsbyImage';
import Section, { SectionHeading, Figure } from './worldMap.style';

const OurCommunity = () => {
  const data = useStaticQuery(graphql`
    query {
      worldMap: file(
        relativePath: { eq: "image/saasAppCreative/world-map.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <Section>
      <Container>
        <SectionHeading>
          <Text className="slogan" content="What is our mission?" />
          <Heading content="We are expanding worldwide to people" />
          <Text
            className="description"
            content="Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool. Create professional ads, branded content, and stunning stories in minutes."
          />
        </SectionHeading>
        <Fade up>
          <Figure>
            <GatsbyImage
              src={
                (data.worldMap !== null) | undefined
                  ? data.worldMap.childImageSharp.gatsbyImageData
                  : {}
              }
              alt="World Map"
            />
          </Figure>
        </Fade>
      </Container>
    </Section>
  );
};

export default OurCommunity;
