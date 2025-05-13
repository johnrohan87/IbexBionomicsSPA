import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  Wrapper,
  Title,
  SectorSection,
  SectorTitle,
  ProductGrid,
  GridCard,
  ProductImage,
  ProductTitle,
  ProductDesc,
  StyledLink
} from "./ProductGrid";

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
  const sectors = ["Aquaculture", "Agriculture", "Environmental Remediation"];

  return (
    <Wrapper>
      <Title>IBEX Bionomics Product Solutions</Title>
      {sectors.map((sector) => {
        const sectorProducts = products.filter(product => product.sector === sector);
        const columns = Math.min(sectorProducts.length, 4);
        const isSingle = sectorProducts.length === 1;

        return (
          <SectorSection key={sector}>
            <SectorTitle>{sector}</SectorTitle>
            <ProductGrid columns={columns} isSingle={isSingle}>
              {sectorProducts.map((product) => (
                <StyledLink to={product.slug || "#"} key={product.id}>
                  <GridCard>
                    {product.image?.childImageSharp?.gatsbyImageData && (
                      <ProductImage
                        src={product.image.childImageSharp.gatsbyImageData.images.fallback.src}
                        alt={product.title}
                      />
                    )}
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductDesc>{product.description}</ProductDesc>
                  </GridCard>
                </StyledLink>
              ))}
            </ProductGrid>
          </SectorSection>
        );
      })}
    </Wrapper>
  );
};

export default Products;