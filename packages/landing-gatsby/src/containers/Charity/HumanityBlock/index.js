import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import BlockWrapper, {
  ContentWrapper,
  List,
  Item,
  ImageWrapper,
} from './humanityBlock.style';

const HumanityBlock = ({ row, col }) => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        humanityData {
          image {
            childImageSharp {
              gatsbyImageData(
                width: 633
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
          slogan
          title
          text
          lists {
            id
            text
          }
        }
      }
    }
  `);

  const { slogan, title, text, lists, image } = data.charityJson.humanityData;

  return (
    <BlockWrapper id="socialFundraising">
      <Container width="1260px">
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <ImageWrapper>
              <GatsbyImage
                src={
                  (image !== null) | undefined
                    ? image.childImageSharp.gatsbyImageData
                    : {}
                }
                alt="Charity Landing"
              />
            </ImageWrapper>
          </Box>
          <Box className="col" {...col}>
            <ContentWrapper>
              <Heading as="h5" content={slogan} />
              <Heading content={title} />
              <Text content={text} />
              <List>
                {lists.map((item) => (
                  <Item key={`list_key${item.id}`}>{item.text}</Item>
                ))}
              </List>

              <a className="learn__more-btn" href="#1">
                <span className="hyphen" />
                <span className="btn_text">Learn More </span>
              </a>
            </ContentWrapper>
          </Box>
        </Box>
      </Container>
    </BlockWrapper>
  );
};

// HumanityBlock style props
HumanityBlock.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
};

// HumanityBlock default style
HumanityBlock.defaultProps = {
  // HumanityBlock row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // HumanityBlock col default style
  col: {
    width: ['100%', '50%', '50%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
};

export default HumanityBlock;
