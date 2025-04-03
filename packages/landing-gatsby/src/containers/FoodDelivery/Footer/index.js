import React from 'react';
import { Link } from 'gatsby';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Box from 'common/components/Box';
import Logo from 'common/components/UIElements/Logo';
import FooterWrapper from './footer.style';

import LogoImage from 'common/assets/image/foodDelivery/logo-dark.png';
import facebookIcon from 'common/assets/image/foodDelivery/footer-fb.svg';
import twitterIcon from 'common/assets/image/foodDelivery/footer-twitter.svg';
import dribbleIcon from 'common/assets/image/foodDelivery/footer-dribbble.svg';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Box className="leftText">
          <Logo
            href="#"
            className="logo"
            logoSrc={LogoImage}
            title="FoodDelivery"
          />
          <Box className="footerText">
            <Text
              as="span"
              content={`Copyright © ${new Date().getFullYear()}`}
            />{' '}
            <Link to="#">RedQ, Inc.</Link>
          </Box>
        </Box>
        <Box className="footerMenu">
          <Link to="#">Support</Link>
          <Link to="#">About Us</Link>
          <Link to="#">Privacy</Link>
          <Link to="#">Contact</Link>
        </Box>
        <Box className="socialLinks">
          <Text as="span" content="Social:" />
          <Link to="#">
            <Image src={facebookIcon} alt="facebook" />
          </Link>
          <Link to="#">
            <Image src={twitterIcon} alt="twitter" />
          </Link>
          <Link to="#">
            <Image src={dribbleIcon} alt="dribbble" />
          </Link>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
