import React from 'react';
import { withPrefix } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Section = styled.section`
  padding: 60px 20px;
  background-color: ${({ bg }) => bg || '#f0fdf4'};
`;

const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 700;
    color: #14532d;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  --imgSize: ${({ imgSize }) => imgSize || '60px'};

  background: white;
  border-radius: 1rem;
  padding: 2rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
  }

  .card-media {
    margin-bottom: 1rem;
    max-width: var(--imgSize);
    width: 100%;
    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  .card-media-blur {
    position: relative;
    width: 100%;
    height: 180px;
    margin-bottom: 1rem;
    overflow: hidden;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;

    .blur-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 55%, rgba(0, 0, 0, 0) 100%);
      -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 55%, rgba(0, 0, 0, 0) 100%);
    }
  }

  h4 {
    font-size: 1.25rem;
    font-weight: bold;
    color: #15803d;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 0.95rem;
    color: #374151;
    line-height: 1.6;
  }
`;

const HorizontalToVerticalDynamicCards4 = ({ title, items, bg, imgSize = '80px' }) => (
  <Section bg={bg}>
    <SectionHeading>
      <h2>{title}</h2>
    </SectionHeading>
    <Grid>
      {items.map((item, idx) => {
        const hasBlur = item.imageStyle === 'fadeTop';
        const wrapperClass = hasBlur ? 'card-media-blur' : 'card-media';
        const gatsbyImage = getImage(item.image);
        const imgProps = hasBlur ? { className: 'blur-img' } : {};

        return (
          <Card key={idx} imgSize={imgSize}>
            <div className={wrapperClass}>
              {gatsbyImage ? (
                <GatsbyImage image={gatsbyImage} alt={item.heading} {...imgProps} />
              ) : typeof item.image === 'string' ? (
                <img
                  src={withPrefix('/' + item.image.replace(/^\/+/g, ''))}
                  alt={item.heading}
                  {...imgProps}
                />
              ) : item.icon ? (
                <img src={item.icon} alt={item.heading} />
              ) : null}
            </div>
            <h4>{item.heading}</h4>
            <p>{item.text}</p>
          </Card>
        );
      })}
    </Grid>
  </Section>
);

HorizontalToVerticalDynamicCards4.propTypes = {
  title: PropTypes.string.isRequired,
  bg: PropTypes.string,
  imgSize: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      imageStyle: PropTypes.string,
    })
  ).isRequired,
};

export default HorizontalToVerticalDynamicCards4;