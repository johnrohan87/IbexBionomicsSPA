import { useStaticQuery, graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { openModal, closeModal } from '@redq/reuse-modal';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Button from 'common/components/Button';
import GatsbyImage from 'common/components/GatsbyImage';
import Image from 'common/components/Image';
import Section, {
  BannerContentWrapper,
  BannerContent,
  VideoWrapper,
  Buttons,
  Figure,
} from './banner.style';
import playIcon from 'common/assets/image/saasAppCreative/icons/play.svg';
import bubble1 from 'common/assets/image/saasAppCreative/banner-bubble-1.png';
import bubble2 from 'common/assets/image/saasAppCreative/banner-bubble-2.png';
import bubble3 from 'common/assets/image/saasAppCreative/banner-bubble-3.png';

// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = () => (
  <VideoWrapper>
    <iframe
      title="Video"
      src="https://www.youtube.com/embed/hW98BFnVCm8"
      frameBorder="0"
    />
  </VideoWrapper>
);

const Banner = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: 'auto',
          height: 'auto',
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const data = useStaticQuery(graphql`
    query {
      dashboard: file(
        relativePath: { eq: "image/saasAppCreative/banner-dashboard.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `);

  return (
    <Section id="home">
      <Container width="1360px">
        <BannerContentWrapper>
          <BannerContent>
            <h2 className="animate__animated animate__fadeInUp">
              The leading Customer <span>dashboard</span> for your daily
              workspace
            </h2>
            <Text
              className="animate__animated animate__fadeInUp"
              content="Join 30,000+ businesses that use Segment's software and APIs to collect, clean, and control their customer data."
            />
            <Buttons>
              <Button title="Get Free Trial" className="button-one" />
              <button className="button-two" onClick={handleVideoModal}>
                <span className="play-icon">
                  <img src={playIcon} alt="play Icon" />
                </span>
                <span className="btn-txt">
                  <span className="primary">Explore</span> Intro Video
                </span>
              </button>
            </Buttons>
          </BannerContent>
          <Figure id="hero-banner" className="hero-banner">
            <GatsbyImage
              src={
                (data.dashboard !== null) | undefined
                  ? data.dashboard.childImageSharp.gatsbyImageData
                  : {}
              }
              alt="dashboard"
            />
            <Image
              src={bubble1}
              alt="bubble 1"
              className={`banner-bubble bubble-1 ${domLoaded ? 'active' : ''}`}
            />
            <Image
              src={bubble2}
              alt="bubble 2"
              className={`banner-bubble bubble-2 ${domLoaded ? 'active' : ''}`}
            />
            <Image
              src={bubble3}
              alt="bubble 3"
              className={`banner-bubble bubble-3 ${domLoaded ? 'active' : ''}`}
            />
          </Figure>
        </BannerContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
