import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import GatsbyImage from 'common/components/GatsbyImage';
import Box from 'common/components/Box';
import AvailableRestaurantsWrapper from './availableRestaurants.style';
const AvailableRestaurants = () => {
  const Data = useStaticQuery(graphql`
    query {
      foodDeliveryJson {
        AVAILABLE_RESTAURANTS_DATA {
          title
          posts {
            image {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
            title
            link
            categories {
              name
            }
          }
        }
      }
    }
  `);
  const { title, posts } = Data.foodDeliveryJson.AVAILABLE_RESTAURANTS_DATA;
  return (
    <AvailableRestaurantsWrapper id="restaurants">
      <Container>
        <Heading as="h2" content={title} />
        <Box className="postWrap">
          {posts.map(({ image, title, link, categories }, index) => (
            <Box
              className="post"
              key={`available-restaurant-post-key-${index}`}
            >
              <GatsbyImage
                src={
                  (image !== null) | undefined
                    ? image.childImageSharp.gatsbyImageData
                    : {}
                }
                alt={title}
              />
              <h3>
                <Link to={link}>{title}</Link>
              </h3>
              <Box className="postMeta">
                {categories.map(({ name }, index) => (
                  <Link
                    to={link}
                    className="categoryItem"
                    key={`available-restaurant-category-key-${index}`}
                  >
                    {name}
                  </Link>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
        <Box className="text-center">
          <Link className="MoreButton" to="#">
            Discover More <Icon size={14} icon={arrowRight} />
          </Link>
        </Box>
      </Container>
    </AvailableRestaurantsWrapper>
  );
};

export default AvailableRestaurants;
