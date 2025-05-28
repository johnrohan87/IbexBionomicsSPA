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
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
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
    max-height: 280px;
  }
`;

const OverlayWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const Overlay = styled.div`
  background: rgba(255, 255, 255, 0.92);
  padding: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: 500px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 480px) {
    width: calc(100% - 2rem);
    padding: 1rem;
  }
  
  @media (max-width: 768px) {
    width: calc(100% - 2rem);
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #14532d;
  background: white;
  padding: 0.25rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  margin-top: -1.5rem;
  margin-bottom: 0.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: -1.25rem;
    padding: 0.2rem 0.75rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #374151;
  margin-top: 1rem;
  margin-bottom: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-top: 0.75rem;
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