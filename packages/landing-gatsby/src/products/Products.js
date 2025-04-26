import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  Wrapper,
  Title,
  SectorSection,
  SectorTitle,
  ProductGrid,
  Card,
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
      {sectors.map((sector) => (
        <SectorSection key={sector}>
          <SectorTitle>{sector}</SectorTitle>
          <ProductGrid>
            {products.filter((product) => product.sector === sector).length === 1 ? (
              <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                {products
                  .filter((product) => product.sector === sector)
                  .map((product) => (
                    <StyledLink to={product.slug || "#"} key={product.id}>
                      <Card>
                        {product.image?.childImageSharp?.gatsbyImageData && (
                          <ProductImage
                            src={product.image.childImageSharp.gatsbyImageData.images.fallback.src}
                            alt={product.title}
                          />
                        )}
                        <ProductTitle>{product.title}</ProductTitle>
                        <ProductDesc>{product.description}</ProductDesc>
                      </Card>
                    </StyledLink>
                  ))}
              </div>
            ) : (
              products
                .filter((product) => product.sector === sector)
                .map((product) => (
                  <StyledLink to={product.slug || "#"} key={product.id}>
                    <Card>
                      {product.image?.childImageSharp?.gatsbyImageData && (
                        <ProductImage
                          src={product.image.childImageSharp.gatsbyImageData.images.fallback.src}
                          alt={product.title}
                        />
                      )}
                      <ProductTitle>{product.title}</ProductTitle>
                      <ProductDesc>{product.description}</ProductDesc>
                    </Card>
                  </StyledLink>
                ))
            )}
          </ProductGrid>
        </SectorSection>
      ))}
    </Wrapper>
  );
};

export default Products;