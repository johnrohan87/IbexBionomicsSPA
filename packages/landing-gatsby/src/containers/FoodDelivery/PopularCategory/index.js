import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Heading from 'common/components/Heading';
import Box from 'common/components/Box';
import Container from 'common/components/UI/Container';
import PopularCategoryWrapper from './popularCategory.style';

const PopularCategory = () => {
  const Data = useStaticQuery(graphql`
    query {
      foodDeliveryJson {
        PRODUCT_CATEGORY {
          title
          list {
            label
            link
          }
        }
      }
    }
  `);
  const { title, list } = Data.foodDeliveryJson.PRODUCT_CATEGORY;
  return (
    <PopularCategoryWrapper id="categories">
      <Container>
        <Heading as="h2" content={title} />
        <Box className="categoryList">
          {list.map(({ label, link }, index) => (
            <Link className="categoryItem" to={link} key={`list-key-${index}`}>
              {label}
            </Link>
          ))}
        </Box>
      </Container>
    </PopularCategoryWrapper>
  );
};

export default PopularCategory;
