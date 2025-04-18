import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';

const GuaranteeSection = ({
  sectionWrapper,
  row,
  title,
  description,
  textArea,
  imageArea,
  ImageOne,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      illustration: file(relativePath: { eq: "image/hosting/badge.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 510
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
          <Box {...textArea}>
            <Fade bottom cascade>
              <Heading {...title} content="30 Days Money Back Guarantee" />
              <Text
                {...description}
                content="We have provided 30 Days Money Back Guarantee in case of dissatisfaction with our product. We care for our customers and their values. "
              />
            </Fade>
          </Box>
        </Box>
        <Box {...row}>
          <Box {...imageArea}>
            <Zoom>
              <GatsbyImage
                src={
                  (Data.illustration !== null) | undefined
                    ? Data.illustration.childImageSharp.gatsbyImageData
                    : {}
                }
                alt="Guarantee"
                style={{ margin: 'auto' }}
              />
            </Zoom>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

GuaranteeSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  imageArea: PropTypes.object,
  ImageOne: PropTypes.object,
};

GuaranteeSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['0px', '0px', '0px', '80px'],
    pb: ['0px', '0px', '0px', '25px'],
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textArea: {
    width: [1, 1, '65%', 1 / 2],
    mb: ['40px', '50px', '60px', '80px'],
  },
  imageArea: {
    width: [1, 1, '40%', 1, 1 / 2],
    textAlign: 'center',
  },
  title: {
    fontSize: ['28px', '30px', '32px', '36px', '36px'],
    fontWeight: '300',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '20px',
    textAlign: 'center',
  },
  description: {
    fontSize: ['15px', '15px', '16px', '16px', '16px'],
    color: 'textColor',
    lineHeight: '1.75',
    mb: '0',
    textAlign: 'center',
  },
  ImageOne: {
    ml: 'auto',
    mr: 'auto',
  },
};

export default GuaranteeSection;
