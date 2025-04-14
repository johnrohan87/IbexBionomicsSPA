import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

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

const ProductImage = styled.img`
  width: 100%;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #14532d;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #374151;
  margin-bottom: 1.5rem;
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
      <Wrapper>
        {product.image?.childImageSharp?.gatsbyImageData && (
          <ProductImage
            src={product.image.childImageSharp.gatsbyImageData.images.fallback.src}
            alt={product.title}
          />
        )}
        <Title>{product.title}</Title>
        <Description>{product.grabber || product.description}</Description>

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