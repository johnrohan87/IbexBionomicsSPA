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
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  justify-items: center;
  align-items: start;
`;

const Card = styled.div`
  --imgSize: ${({ imgSize }) => imgSize || '60px'};

  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

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

  .card-caption {
    font-size: 0.85rem;
    color: #6b7280;
    margin-top: 0.5rem;
  }
`;

const HorizontalToVerticalDynamicCards4 = ({ title, items, bg, imgSize = '60px' }) => (
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

        const CardContent = (
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
            {item.caption && <p className="card-caption">{item.caption}</p>}
          </Card>
        );

        return item.link ? (
          <a key={idx} href={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
            {CardContent}
          </a>
        ) : (
          <div key={idx}>{CardContent}</div>
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
      caption: PropTypes.string,
      icon: PropTypes.string,
      link: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      imageStyle: PropTypes.string,
    })
  ).isRequired,
};

export default HorizontalToVerticalDynamicCards4;