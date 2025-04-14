import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Section = styled.section`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 4rem 1.5rem;
  background: ${({ bg }) => bg || 'white'};

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  max-width: 500px;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 1rem;
  }
`;

const Content = styled.div`
  flex: 1;
  max-width: 600px;

  h2 {
    font-size: ${({ headingSize }) => headingSize || '2rem'};
    color: #14532d;
    margin-bottom: 1rem;
  }

  p {
    font-size: ${({ textSize }) => textSize || '1rem'};
    color: #374151;
    line-height: 1.6;
  }
`;

const PictureWithContent = ({
  image,
  icon,
  title,
  text,
  bg,
  reverse = false,
  headingSize,
  textSize,
}) => {
  const imgData = getImage(image);

  return (
    <Section bg={bg} reverse={reverse}>
      <ImageWrapper>
        {imgData ? (
          <GatsbyImage image={imgData} alt={title} />
        ) : icon ? (
          <img src={icon} alt={title} />
        ) : null}
      </ImageWrapper>
      <Content headingSize={headingSize} textSize={textSize}>
        {title && <h2>{title}</h2>}
        {text && <p>{text}</p>}
      </Content>
    </Section>
  );
};

PictureWithContent.propTypes = {
  image: PropTypes.object,
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  bg: PropTypes.string,
  reverse: PropTypes.bool,
  headingSize: PropTypes.string,
  textSize: PropTypes.string,
};

export default PictureWithContent;