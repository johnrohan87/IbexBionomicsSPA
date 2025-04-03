import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/components/UI/Container';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import GatsbyImage from 'common/components/GatsbyImage';
import icon11 from 'common/assets/image/saasCreative/icons/11.png';
import icon12 from 'common/assets/image/saasCreative/icons/12.png';
import Section, {
  Grid,
  Figure,
  Content,
  SectionHeading,
  FeatureGroup,
  FeatureItem,
} from './experience.style';

const Illustration = ({ src, ...rest }) => (
  <Fade up>
    <Figure>
      <GatsbyImage src={src} {...rest} />
    </Figure>
  </Fade>
);

const WalletExperience = () => {
  const isMobileOrTablet = useMediaQuery({
    query: '(max-width: 768px)',
  });
  const image = useStaticQuery(graphql`
    query {
      analytics: file(
        relativePath: { eq: "image/saasCreative/analytics.png" }
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

  const imageSrc =
    (image.analytics !== null) | undefined
      ? image.analytics.childImageSharp.gatsbyImageData
      : {};

  return (
    <Section>
      <Container width="1400px">
        <Grid>
          {isMobileOrTablet && <Illustration src={imageSrc} alt="analytics" />}
          <Content>
            <SectionHeading>
              <Text className="subtitle" content="Ultimate Wallet Experience" />
              <Heading content="Take your wallet experience to new ultimate level" />
              <Text
                className="description"
                content="Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool."
              />
            </SectionHeading>
            <FeatureGroup>
              <FeatureItem>
                <figure>
                  <Image src={icon11} alt="clock icon" />
                </figure>
                <div>
                  <Heading as="h4" content="Fast &amp; Instant Transfer" />
                  <Text
                    className="description"
                    content="We’re driven beyond just finishing the projects. We want to find solutions."
                  />
                </div>
              </FeatureItem>
              <FeatureItem>
                <figure>
                  <Image src={icon12} alt="folder icon" />
                </figure>
                <div>
                  <Heading as="h4" content="File Management System" />
                  <Text
                    className="description"
                    content="We’re driven beyond just finishing the projects. We want to find solutions with the assessment."
                  />
                </div>
              </FeatureItem>
            </FeatureGroup>
          </Content>

          {!isMobileOrTablet && <Illustration src={imageSrc} alt="analytics" />}
        </Grid>
      </Container>
    </Section>
  );
};

export default WalletExperience;
