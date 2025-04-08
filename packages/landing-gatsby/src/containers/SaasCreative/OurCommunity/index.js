import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import Section, { SectionHeading, Figure } from './community.style';

const OurCommunity = () => {
  const illustration = useStaticQuery(graphql`
    query {
      users: file(relativePath: { eq: "image/saasCreative/users.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1167
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `);
  return (
    <Section>
      <Container width="1400px">
        <SectionHeading>
          <Text className="slogan" content="Our Community" />
          <Heading content="We are a community of 15,000+ Customer" />
          <Text
            className="description"
            content="RedQ, Inc’s core values evolved with us as the company grew and we learned from our experiences. They epitomise what we want to achieve, and they might change in the future, as we aim higher and higher. We think of those values as important to our culture and individual sense of accomplishment."
          />
        </SectionHeading>
        <Fade up>
          <Figure>
            <GatsbyImage
              src={
                (illustration.users !== null) | undefined
                  ? illustration.users.childImageSharp.gatsbyImageData
                  : {}
              }
              objectFit="contain"
              alt="users"
            />
          </Figure>
        </Fade>
      </Container>
    </Section>
  );
};

export default OurCommunity;
