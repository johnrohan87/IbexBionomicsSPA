import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import GatsbyImage from 'common/components/GatsbyImage';
import Box from 'common/components/Box';
import mapPin from 'common/assets/image/foodDelivery/banner-map-pin.svg';
import arrowIcon from 'common/assets/image/foodDelivery/banner-arrow.svg';
import BannerWrapper from './banner.style';
const Banner = () => {
  const Data = useStaticQuery(graphql`
    query {
      foodDeliveryJson {
        BANNER_DATA {
          sectionImage {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
          title
          text
          tagLine
          buttons {
            icon {
              publicURL
            }
            title
            text
            link
          }
        }
      }
    }
  `);
  const { sectionImage, title, text, tagLine, buttons } =
    Data.foodDeliveryJson.BANNER_DATA;
  return (
    <BannerWrapper id="banner_section">
      <Container>
        <Box className="content">
          <Heading as="h2" content={title} />
          <Text as="p" className="paragraph" content={text} />
          <form action="#" className="bannerForm">
            <label htmlFor="location" className="sr-only">
              Your Address
            </label>
            <Image className="mapPin" src={mapPin} alt={title} />
            <input type="text" placeholder="Enter your address.." />
            <button type="submit" className="bannerBtn">
              <Image src={arrowIcon} alt="banner button" />
            </button>
          </form>
          <Text as="p" className="tagLine" content={tagLine} />
          <Box className="buttonWrap">
            {buttons.map(({ icon, text, title, link }, index) => (
              <Link
                className="bannerAppBtn"
                to={link}
                key={`banner-button-${index}`}
              >
                <Image
                  src={icon.publicURL}
                  width="30"
                  height="30"
                  alt={title}
                />
                <Box className="btnContent">
                  <Text as="span" content={text} />
                  <Text as="p" content={title} />
                </Box>
              </Link>
            ))}
          </Box>
        </Box>
        <Box className="image">
          <Fade right>
            <GatsbyImage
              src={
                (sectionImage !== null) | undefined
                  ? sectionImage.childImageSharp.gatsbyImageData
                  : {}
              }
              alt={title}
            />
          </Fade>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
