import React from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { playCircle } from 'react-icons-kit/fa/playCircle';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Rating from 'common/components/Rating';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import BannerWrapper, {
  BannerContent,
  RatingInfo,
  BannerImage,
  ButtonGroup,
} from './banner.style';

import microsoft from 'common/assets/image/appClassic/microsoft.svg';

const Banner = () => {
  const Data = useStaticQuery(graphql`
    query {
      appScreenshot: file(
        relativePath: { eq: "image/appClassic/bannerImg.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 459
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `);
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up>
            <RatingInfo>
              <Rating rating={4} />
              4.9 of 5 By <Image src={microsoft} alt="Microsoft" />
            </RatingInfo>
          </Fade>
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="The Revolution of Ultimate Platform to monitor your task"
            />
          </Fade>
          <Fade up delay={200}>
            <Text content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore magna ipsum dolor sit amet consectetur." />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <Button className="primary" title="Start Free trail" />
              <Button
                className="text"
                variant="textButton"
                icon={<Icon icon={playCircle} />}
                iconPosition="left"
                title="Watch Video"
              />
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <Fade up delay={100}>
            <GatsbyImage
              src={
                (Data.appScreenshot !== null) | undefined
                  ? Data.appScreenshot.childImageSharp.gatsbyImageData
                  : {}
              }
              alt="App Screenshot"
            />
          </Fade>
        </BannerImage>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
