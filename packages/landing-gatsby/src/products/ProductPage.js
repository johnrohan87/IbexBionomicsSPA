import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Parallax } from 'react-scroll-parallax';


// Import dynamic layout blocks
import HorizontalToVerticalDynamicCards4 from "./containers/Blocks/HorizontalToVerticalDynamicCards4";
import PictureWithContent from './containers/Blocks/PictureWithContent'

const components = {
  HorizontalToVerticalDynamicCards4,
  PictureWithContent,
};

const Wrapper = styled.div`
  padding: 3rem 1.5rem;
  max-width: 800px;
  margin: 0 auto;
`;

const ProductImageWrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 2rem;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const OverlayWrapper = styled.div`
  position: absolute;
  bottom: 40%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;

const Overlay = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem 1.5rem;
  text-align: center;
  border-radius: 0.75rem;
  display: inline-block;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(6px);
  max-width: 90%;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: bold;
  color: #14532d;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #374151;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.95rem;
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

const ProductPage = ({ data, pageContext }) => {
  const product = data.productData;
  const { layoutBlocks = [] } = pageContext;

  console.log("✅ layoutBlocks:", layoutBlocks);
  return (
    <>
      <ProductImageWrapper>
        {product.image?.childImageSharp?.gatsbyImageData && (
          <ProductImage
            src={product.image.childImageSharp.gatsbyImageData.images.fallback.src}
            alt={product.title}
          />
        )}
        <OverlayWrapper>
          <Fade bottom duration={1000} delay={100} once>
            <Parallax translateY={[0, 75]}>
              <Overlay>
                <Title>{product.title}</Title>
                <Description>{product.grabber || product.description}</Description>
              </Overlay>
            </Parallax>
          </Fade>
        </OverlayWrapper>
      </ProductImageWrapper>

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

        {product.badges && product.badges.length > 0 && (
          <BadgeGroup>
            {product.badges.map((badge, idx) => (
              <Badge key={idx}>{badge}</Badge>
            ))}
          </BadgeGroup>
        )}
      </Wrapper>

      {/* Render dynamic layout blocks from gatsby-node context */}
      {layoutBlocks.map((block, idx) => {
        const BlockComponent = components[block.type];
        if (!BlockComponent) return null;
        return <BlockComponent key={idx} {...block.props} />;
      })}
    </>
  );
};

export const query = graphql`
  query ProductPageQuery($id: String!) {
    productData(id: { eq: $id }) {
      id
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