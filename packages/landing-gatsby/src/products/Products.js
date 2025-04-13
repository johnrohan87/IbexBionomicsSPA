import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";
import { Card, CardContent } from "./containers/Card/card";

const Wrapper = styled.div`
  padding: 3rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2.5rem;
  color: #14532d;
`;

const SectorSection = styled.div`
  margin-bottom: 4rem;
`;

const SectorTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #15803d;
  color: #15803d;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const ProductImage = styled.img`
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  width: 100%;
  object-fit: cover;
`;

const ProductTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #166534;
  margin-bottom: 0.5rem;
`;

const ProductDesc = styled.p`
  font-size: 0.875rem;
  color: #374151;
`;

const Products = () => {
  const data = useStaticQuery(graphql`
    query ProductListQuery {
      allProductData {
        nodes {
          id
          title
          description
          sector
          slug
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  const products = data.allProductData.nodes;

  const sectors = [
    "Aquaculture",
    "Agriculture",
    "Environmental Remediation"
  ];

  return (
    <Wrapper>
      <Title>IBEX Bionomics Product Solutions</Title>
      {sectors.map((sector) => (
        <SectorSection key={sector}>
          <SectorTitle>{sector}</SectorTitle>
          <ProductGrid>
            {products
              .filter((product) => product.sector === sector)
              .map((product) => (
                <Link to={product.slug || "#"} key={product.id} style={{ textDecoration: "none" }}>
                  <Card>
                    <CardContent>
                      {product.image?.childImageSharp?.gatsbyImageData && (
                        <ProductImage
                          src={product.image.childImageSharp.gatsbyImageData.images.fallback.src}
                          alt={product.title}
                        />
                      )}
                      <ProductTitle>{product.title}</ProductTitle>
                      <ProductDesc>{product.description}</ProductDesc>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </ProductGrid>
        </SectorSection>
      ))}
    </Wrapper>
  );
};

export default Products;