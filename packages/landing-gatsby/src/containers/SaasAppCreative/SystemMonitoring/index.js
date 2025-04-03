import React from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import Text from 'common/components/Text';
import Link from 'common/components/Link';
import Heading from 'common/components/Heading';
import Section, { Grid, FigureGroup, Content } from './systemMonitoring.style';
import rightArrow from 'common/assets/image/saasAppCreative/icons/right-arrow.svg';

const SystemMonitoring = () => {
  const data = useStaticQuery(graphql`
    query {
      report1: file(relativePath: { eq: "image/saasAppCreative/report1.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 572
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      report2: file(relativePath: { eq: "image/saasAppCreative/report2.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 360
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <Section>
      <Container width="1360px">
        <Grid>
          <Content>
            <Text className="subtitle" content="File System Tracking" />
            <Heading content="Take your user monitoring  system to new ultimate  level with file tracking" />
            <Text
              className="description"
              content="Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool. Create professional ads, branded content, and stunning stories in minutes."
            />
            <Link href="#" className="explore">
              Explore details
              <img src={rightArrow} alt="right arrow icon" />
            </Link>
          </Content>
          <FigureGroup>
            <Fade up>
              <GatsbyImage
                src={
                  (data.report1 !== null) | undefined
                    ? data.report1.childImageSharp.gatsbyImageData
                    : {}
                }
                alt="report1"
              />
            </Fade>
            <div className="graph-2">
              <Fade up delay={200}>
                <GatsbyImage
                  src={
                    (data.report2 !== null) | undefined
                      ? data.report2.childImageSharp.gatsbyImageData
                      : {}
                  }
                  alt="report2"
                />
              </Fade>
            </div>
          </FigureGroup>
        </Grid>
      </Container>
    </Section>
  );
};

export default SystemMonitoring;
