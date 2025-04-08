import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import GatsbyImage from 'common/components/GatsbyImage';
import Section, {
  Pattern,
  BannerContentWrapper,
  BannerContent,
  Figure,
} from './banner.style';

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      dashboard: file(
        relativePath: { eq: "image/webAppMinimal/dashboard.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `);
  return (
    <Section id="home">
      <Pattern />
      <Container width="1400px">
        <BannerContentWrapper>
          <BannerContent>
            <Heading
              className="animate__animated animate__fadeInUp"
              content="The leading Customer dashboard for your daily workspace"
            />
            <Text
              className="animate__animated animate__fadeInUp"
              content="Join 30,000+ businesses that use Segment's software and APIs to collect, clean, and control their customer data."
            />
          </BannerContent>
          <Figure className="animate__animated animate__fadeInUp animate__fast">
            <GatsbyImage
              src={
                (data.dashboard !== null) | undefined
                  ? data.dashboard.childImageSharp.gatsbyImageData
                  : {}
              }
              alt="dashboard"
            />
          </Figure>
        </BannerContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
