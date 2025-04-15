import React from 'react';
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
  }

  /* Default image style */
  .card-media {
    margin-bottom: 1rem;
    max-width: ${({ imgSize }) => imgSize || '60px'};
    width: 100%;
    height: auto;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  /* Blur image with fade-out top banner style */
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
    font-size: 1.125rem;
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

const HorizontalToVerticalDynamicCards4 = ({ title, items, bg, imgSize = '60px' }) => {
  return (
    <Section bg={bg}>
      <SectionHeading>
        <h2>{title}</h2>
      </SectionHeading>
      <Grid>
        {items.slice(0, 4).map((item, idx) => {
          const imageObj = getImage(item.image);

          return (
            <Card key={idx} imgSize={imgSize}>
              <div className={item.imageStyle === 'fadeTop' ? "card-media-blur" : "card-media"}>
                {imageObj ? (
                  <GatsbyImage image={imageObj} alt={item.heading} className="blur-img" />
                ) : typeof item.image === "string" ? (
                  <img src={`/${item.image}`} alt={item.heading} className="blur-img" />
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
};

HorizontalToVerticalDynamicCards4.propTypes = {
  title: PropTypes.string.isRequired,
  bg: PropTypes.string,
  imgSize: PropTypes.string, // e.g., "60px" or "100px"
  items: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.string, // optional
      image: PropTypes.oneOfType([
        PropTypes.object, // for GatsbyImage
        PropTypes.string  // for static path fallback
      ])
    })
  ).isRequired,
};

export default HorizontalToVerticalDynamicCards4;