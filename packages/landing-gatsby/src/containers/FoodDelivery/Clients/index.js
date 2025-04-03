import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Box from 'common/components/Box';
import ClientsWrapper from './clients.style';
const Clients = () => {
  const Data = useStaticQuery(graphql`
    query {
      foodDeliveryJson {
        CLIENTS_DATA {
          images {
            path {
              publicURL
            }
          }
          title
        }
      }
    }
  `);
  const { title, images } = Data.foodDeliveryJson.CLIENTS_DATA;
  return (
    <ClientsWrapper>
      <Container>
        <Heading as="h2" content={title} />
        <Box className="clientImages">
          {images.map(({ path }, index) => (
            <Image
              src={path.publicURL}
              key={`clients-image-key-${index}`}
              alt="client image"
            />
          ))}
        </Box>
      </Container>
    </ClientsWrapper>
  );
};

export default Clients;
