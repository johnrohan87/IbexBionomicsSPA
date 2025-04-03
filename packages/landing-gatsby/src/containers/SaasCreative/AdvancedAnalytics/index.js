import React from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { useStaticQuery, graphql } from 'gatsby';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Link from 'common/components/Link';
import Heading from 'common/components/Heading';
import Section, { Grid, Figure, Content } from './analytics.style';
import GatsbyImage from 'common/components/GatsbyImage';

const AdvancedAnalytics = () => {
  const image = useStaticQuery(graphql`
    query {
      analytics: file(
        relativePath: { eq: "image/saasCreative/analytics.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 714
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <Section>
      <Container width="1400px">
        <Grid>
          <Fade up>
            <Figure>
              <GatsbyImage
                src={
                  (image.analytics !== null) | undefined
                    ? image.analytics.childImageSharp.gatsbyImageData
                    : {}
                }
                alt="thank you docs"
              />
            </Figure>
          </Fade>
          <Content>
            <Text className="subtitle" content="Audience Source Monitoring" />
            <Heading content="Advanced analytics tools to keep you in control &amp; customizable" />
            <Text
              className="description"
              content="Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool."
            />
            <Link href="#" className="explore">
              Explore details <Icon icon={arrowRight} />
            </Link>
          </Content>
        </Grid>
      </Container>
    </Section>
  );
};

export default AdvancedAnalytics;
