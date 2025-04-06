import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import BannerArea, { Col } from './banner.style';
import { motion } from 'framer-motion';

const Banner = () => {
  const Data = useStaticQuery(graphql`
    query {
      webAppJson {
        BANNER_DATA {
          title
          text
          button {
            link
            label
          }
          image {
            src
          }
          tagline
        }
      }
    }
  `);

  const { title, text, button, image, tagline } = Data.webAppJson.BANNER_DATA;

  return (
    <BannerArea id="banner_section">
      <Container className="Container">
        <Col>
          {/* Animated Logo */}
          <motion.img
            src="/IbexBionomics/IbexBionomicsLogo2.png"
            alt="IbexBionomics Logo"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ maxWidth: '300px', marginBottom: '20px' }}
          />

          {/* Animated Heading */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <Heading as="h2" content={title} />
            <Text as="p" content={text} />
            <Box className="ButtonWrap">
              <Link className="Button" to={button.link}>
                {button.label}
                <Icon size={18} icon={androidArrowForward} />
              </Link>
              <Text as="span" content={tagline} />
            </Box>
          </motion.div>
        </Col>
      </Container>

      {/* Optional: Display additional banner images from CMS (if needed) */}
      <Box className="bannerImage">
        {image.map(({ src }, index) => (
          <Image
            src={src}
            alt=""
            key={`banner-image-key-${index}`}
            style={{ maxWidth: '100%' }}
          />
        ))}
      </Box>
    </BannerArea>
  );
};

export default Banner;