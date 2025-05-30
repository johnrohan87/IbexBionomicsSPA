import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Card from 'common/components/Card';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import VisitorSectionWrapper, { SectionObject } from './visitor.style';

const VisitorSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  btnStyle,
}) => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "image/saas/visitor_bg.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1017
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      image2: file(relativePath: { eq: "image/saas/saasvisitor1.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1031
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `);

  return (
    <VisitorSectionWrapper id="visitorSection">
      <SectionObject>
        <Card className="objectWrapper" {...imageWrapper}>
          <Zoom>
            <GatsbyImage
              src={
                (data.image1 !== null) | undefined
                  ? data.image1.childImageSharp.gatsbyImageData
                  : {}
              }
              alt="BgImage"
            />
          </Zoom>
          <Card className="dashboardWrapper" {...imageWrapper}>
            <Fade left>
              <GatsbyImage
                src={
                  (data.image2 !== null) | undefined
                    ? data.image2.childImageSharp.gatsbyImageData
                    : {}
                }
                alt="VisitorDashboard1"
              />
            </Fade>
          </Card>
        </Card>
      </SectionObject>
      <Container>
        <Box {...textArea}>
          <FeatureBlock
            title={
              <Heading
                content="Make your website growth with next level visitors"
                {...title}
              />
            }
            description={
              <Text
                content="For Enhanced performance we use LiteSpeed Web Server, HTTP/2, PHP7. We make your website faster, which will help you to increase search ranking!."
                {...description}
              />
            }
            button={
              <a href="#1">
                <Button title="HOW IT WORKS" {...btnStyle} />
              </a>
            }
          />
        </Box>
      </Container>
    </VisitorSectionWrapper>
  );
};

VisitorSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

VisitorSection.defaultProps = {
  textArea: {
    width: ['100%', '100%', '45%'],
    ml: [0, 0, '58%'],
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  title: {
    fontSize: ['20px', '26px', '26px', '36px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    lineHeight: '1.5',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
};

export default VisitorSection;
