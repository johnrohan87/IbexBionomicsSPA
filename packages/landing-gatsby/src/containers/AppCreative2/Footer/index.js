import React from 'react';
import FooterBottom from './footer.bottom';
import { Section } from './footer.style';
import FooterTop from './footer.top';

const Footer = (props) => {
  return (
    <Section {...props}>
      <FooterTop width="1400px" />
      <FooterBottom width="1400px" />
    </Section>
  );
};

export default Footer;
