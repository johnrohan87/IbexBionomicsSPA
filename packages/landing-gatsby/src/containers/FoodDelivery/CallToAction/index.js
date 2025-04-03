import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Box from 'common/components/Box';

import CallToActionWrapper from './callToAction.style';

const CallToAction = () => {
  const Data = useStaticQuery(graphql`
    query {
      foodDeliveryJson {
        CALL_TO_ACTION_DATA {
          image {
            publicURL
          }
          title
          text
          link {
            label
            path
          }
        }
      }
    }
  `);
  const { title, text, link, image } =
    Data.foodDeliveryJson.CALL_TO_ACTION_DATA;
  return (
    <CallToActionWrapper id="order">
      <Container>
        <Image
          src={image.publicURL}
          className="sectionImage"
          alt="call to action image"
        />
        <Box className="content">
          <Heading as="h2" content={title} />
          <Text as="p" content={text} />
          <Link className="callButton" to={link.path}>
            {link.label} <Icon size={14} icon={arrowRight} />
          </Link>
        </Box>
      </Container>
    </CallToActionWrapper>
  );
};

export default CallToAction;
