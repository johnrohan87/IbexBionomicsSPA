import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { withPrefix } from "gatsby";
import Fade from "react-reveal/Fade";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import HorizontalToVerticalDynamicCards4 from "./containers/Blocks/HorizontalToVerticalDynamicCards4";
import PictureWithContent from "./containers/Blocks/PictureWithContent";

// Styled Components
const Wrapper = styled.div`
  padding: 3rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Hero = styled.div`
  position: relative;
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 2rem;
`;

const HeroImage = styled(GatsbyImage)`
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 7;
  object-fit: cover;

  @media (max-width: 1024px) {
    aspect-ratio: 16 / 9;
  }

  @media (max-width: 768px) {
    aspect-ratio: 16 / 10;
  }
`;

const OverlayWrap = styled.div`
  position: absolute;
  bottom: 40%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;

const Overlay = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(6px);
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  animation: fadeInUp 0.9s ease-in-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #14532d;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #374151;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  color: #166534;
`;

const SectionText = styled.p`
  font-size: 0.95rem;
  color: #444;
  margin-bottom: 1rem;
`;

const BadgeGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Badge = styled.span`
  background-color: #e0fce0;
  color: #1f7a1f;
  font-size: 0.75rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  font-weight: 600;
`;

// Block Types
const blocks = {
  HorizontalToVerticalDynamicCards4,
  PictureWithContent,
};

const ProductPage = ({ data, pageContext }) => {
  const product = data.productData;
  const { layoutBlocks = [] } = pageContext;
  const heroImage = getImage(product.image);

  return (
    <>
      {/* Hero section */}
      <Hero>
        {heroImage && <HeroImage image={heroImage} alt={product.title} />}
        <OverlayWrap>
          <Fade bottom duration={800} delay={100} once>
            <Overlay>
              <Title>{product.title}</Title>
              <Subtitle>{product.grabber || product.description}</Subtitle>
            </Overlay>
          </Fade>
        </OverlayWrap>
      </Hero>

      <Wrapper>
        {product.modeOfAction && (
          <>
            <SectionTitle>Mode of Action</SectionTitle>
            <SectionText>{product.modeOfAction}</SectionText>
          </>
        )}
        {product.modeOfUse && (
          <>
            <SectionTitle>Mode of Use</SectionTitle>
            <SectionText>{product.modeOfUse}</SectionText>
          </>
        )}
        {product.badges?.length > 0 && (
          <BadgeGroup>
            {product.badges.map((badge, idx) => (
              <Badge key={idx}>{badge}</Badge>
            ))}
          </BadgeGroup>
        )}
      </Wrapper>

      {/* Dynamic Layout Blocks */}
      {layoutBlocks.map((block, idx) => {
        const BlockComp = blocks[block.type];
        return BlockComp ? <BlockComp key={idx} {...block.props} /> : null;
      })}
    </>
  );
};

export const query = graphql`
  query ProductPageQuery($id: String!) {
    productData(id: { eq: $id }) {
      id
      productKey
      title
      description
      grabber
      modeOfAction
      modeOfUse
      badges
      image {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default ProductPage;