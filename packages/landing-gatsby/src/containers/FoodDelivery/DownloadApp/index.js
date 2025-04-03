import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Box from 'common/components/Box';
import DownloadAppWrapper from './downloadApp.style';
const DownloadApp = () => {
  const Data = useStaticQuery(graphql`
    query {
      foodDeliveryJson {
        DOWNLOAD_APP_DATA {
          sectionImage {
            publicURL
          }
          title
          text
          buttons {
            icon {
              publicURL
            }
            text
            title
            link
          }
        }
      }
    }
  `);
  const { sectionImage, title, text, buttons } =
    Data.foodDeliveryJson.DOWNLOAD_APP_DATA;
  return (
    <DownloadAppWrapper id="download">
      <Container>
        <Box className="image">
          <Image src={sectionImage.publicURL} alt={title} />
        </Box>
        <Box className="content">
          <Heading as="h2" content={title} />
          <Text as="p" content={text} />
          <Box className="buttonWrap">
            {buttons.map(({ icon, text, title, link }, index) => (
              <Link
                className="downloadAppBtn"
                to={link}
                key={`download-app-button-${index}`}
              >
                <Image
                  src={icon.publicURL}
                  width="30"
                  height="30"
                  alt={title}
                />
                <Box className="btnContent">
                  <Text as="span" content={text} />
                  <Text as="p" content={title} />
                </Box>
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </DownloadAppWrapper>
  );
};

export default DownloadApp;
