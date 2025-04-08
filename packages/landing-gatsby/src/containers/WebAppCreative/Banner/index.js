import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Input from 'common/components/Input';
import Button from 'common/components/Button';
import Image from 'common/components/Image';
import GatsbyImage from 'common/components/GatsbyImage';
import Section, {
  BannerContentWrapper,
  BannerContent,
  Subscribe,
  Figure,
} from './banner.style';
import envelope from 'common/assets/image/webAppCreative/icons/envelope.png';

const Banner = () => {
  const dashboard = useStaticQuery(graphql`
    query {
      illustration: file(
        relativePath: { eq: "image/webAppCreative/dashboard.png" }
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
      <Container width="1400px">
        <BannerContentWrapper>
          <BannerContent>
            <Heading
              className="animate__animated animate__fadeInUp"
              content="The leading Customer dashboard for your daily workspace"
            />
            <Text
              className="animate__animated animate__fadeInUp"
              content="Join 30,000+ businesses that use Segment's software and APIs to
              collect, clean, and control their customer data."
            />
            <Subscribe className="animate__animated animate__fadeInUp">
              <Input
                inputType="email"
                placeholder="Your work email"
                iconPosition="left"
                aria-label="email"
                icon={<Image src={envelope} alt="envelope" />}
              />
              <Button title="Get a demo" type="submit" />
            </Subscribe>
          </BannerContent>
          <Figure className="animate__animated animate__fadeInUp animate__fast">
            <GatsbyImage
              src={
                (dashboard.illustration !== null) | undefined
                  ? dashboard.illustration.childImageSharp.gatsbyImageData
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
