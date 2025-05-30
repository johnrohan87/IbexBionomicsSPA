import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import SectionWrapper, {
  SectionHeader,
  ImageWrapper,
} from './mapSection.style';

import country1 from 'common/assets/image/cryptoModern/uk.png';
import country2 from 'common/assets/image/cryptoModern/africa.png';
import country3 from 'common/assets/image/cryptoModern/spain.png';
import countryIcon from 'common/assets/image/cryptoModern/countryIcon.png';

const MapSection = () => {
  const Data = useStaticQuery(graphql`
    query {
      illustration: file(relativePath: { eq: "image/cryptoModern/map.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1102
            placeholder: BLURRED
            formats: [AUTO, PNG]
          )
        }
      }
    }
  `);
  return (
    <SectionWrapper id="map">
      <Container width="1200px">
        <SectionHeader>
          <Heading content="More than 3 Bilion worldwide use" />
          <Text content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor sit ." />
          <Text className="smallText" content="Licenced gambling countries" />
          <div className="countries">
            <div className="countriesSingle">
              <Image src={country1} alt="country image" />
              <Text className="smallText" content="United Kingdom" />
            </div>
            <div className="countriesSingle">
              <Image src={country2} alt="country image" />
              <Text className="smallText" content="South Africa" />
            </div>
            <div className="countriesSingle">
              <Image src={country3} alt="country image" />
              <Text className="smallText" content="Spain" />
            </div>
          </div>
        </SectionHeader>
        <ImageWrapper>
          <GatsbyImage
            src={
              (Data.illustration !== null) | undefined
                ? Data.illustration.childImageSharp.gatsbyImageData
                : {}
            }
            alt="Privacy Illustration"
          />
          <div className="countryIcon">
            <div className="countryIconSingle">
              <Image
                className="countryIconImg"
                src={countryIcon}
                alt="Country Icon"
              />
            </div>
            <div className="countryIconSingle">
              <Image
                className="countryIconImg"
                src={countryIcon}
                alt="Country Icon"
              />
            </div>
            <div className="countryIconSingle">
              <Image
                className="countryIconImg"
                src={countryIcon}
                alt="Country Icon"
              />
            </div>
            <div className="countryIconSingle">
              <Image
                className="countryIconImg"
                src={countryIcon}
                alt="Country Icon"
              />
            </div>
            <div className="countryIconSingle">
              <Image
                className="countryIconImg"
                src={countryIcon}
                alt="Country Icon"
              />
            </div>
            <div className="countryIconSingle">
              <Image
                className="countryIconImg"
                src={countryIcon}
                alt="Country Icon"
              />
            </div>
            <div className="countryIconSingle">
              <Image
                className="countryIconImg"
                src={countryIcon}
                alt="Country Icon"
              />
            </div>
          </div>
        </ImageWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default MapSection;
