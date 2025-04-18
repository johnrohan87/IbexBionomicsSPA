import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Card from 'common/components/Card';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';

const InfoSection = ({
  sectionWrapper,
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
  imageAreaRow,
  imageWrapper,
  imageWrapperOne,
  imageWrapperTwo,
}) => {
  const images = useStaticQuery(graphql`
    query {
      info1: file(relativePath: { eq: "image/hosting/info1.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 825
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      info2: file(relativePath: { eq: "image/hosting/info2.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 389
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `);
  return (
    <Box {...sectionWrapper}>
      <Container>
        <Box {...row}>
          <Box {...col} {...textArea}>
            <Fade bottom cascade>
              <Heading
                {...title}
                content="Increase your website growth with high performance servers"
              />
              <Text
                {...description}
                content="For Enhanced performance we use LiteSpeed Web Server, HTTP/2, PHP7. We make your website faster, which will help you to increase search ranking!."
              />
              <Box>
                <a href="#1">
                  <Button {...button} title="HOW IT WORKS" />
                </a>
              </Box>
            </Fade>
          </Box>
        </Box>
      </Container>
      <Container fullWidth noGutter className="info-sec-container">
        <Box {...row} {...imageAreaRow}>
          <Box {...col} {...imageArea}>
            <Card {...imageWrapper} {...imageWrapperOne}>
              <Fade right>
                <GatsbyImage
                  src={
                    (images.info1 !== null) | undefined
                      ? images.info1.childImageSharp.gatsbyImageData
                      : {}
                  }
                  alt="Info Image One"
                />
              </Fade>
            </Card>
            <Card {...imageWrapper} {...imageWrapperTwo}>
              <Fade bottom>
                <GatsbyImage
                  src={
                    (images.info2 !== null) | undefined
                      ? images.info2.childImageSharp.gatsbyImageData
                      : {}
                  }
                  alt="Info Image Two"
                />
              </Fade>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

InfoSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
  imageAreaRow: PropTypes.object,
  imageWrapper: PropTypes.object,
  imageWrapperOne: PropTypes.object,
  imageWrapperTwo: PropTypes.object,
};

InfoSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['0px', '0px', '0px', '0px', '80px'],
    pb: ['60px', '80px', '40px', '80px', '80px'],
    id: 'info_section',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '55%', '50%', '42%'],
  },
  imageArea: {
    width: ['100%', '100%', '50%'],
    flexBox: true,
    flexDirection: 'row-reverse',
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  imageWrapperOne: {
    ml: '-200px',
  },
  imageWrapperTwo: {
    alignSelf: 'flex-end',
    mb: '-60px',
  },
  title: {
    fontSize: ['30px', '38px', '38px', '48px', '48px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '20px',
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    height: `{5}`,
  },
};

export default InfoSection;
