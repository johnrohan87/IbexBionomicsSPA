// ProductGrid.js
export const ProductGrid = ({ products, sector }) => (
    <Grid>
      {products.filter(p => p.sector === sector).map(product => (
        <Link to={product.slug} key={product.id}>
          <Card>
            <CardContent>
              <ProductImage src={product.image.childImageSharp.gatsbyImageData.images.fallback.src} alt={product.title} />
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDesc>{product.description}</ProductDesc>
            </CardContent>
          </Card>
        </Link>
      ))}
    </Grid>
  );  