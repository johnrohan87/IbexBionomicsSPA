import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/agencyDigital';
import { ResetCSS } from 'common/assets/css/style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Navbar from 'containers/AgencyClassic/Navbar';
import Banner from 'containers/AgencyClassic/Banner';
import Clients from 'containers/AgencyClassic/Clients';
import FeatureSection from 'containers/AgencyClassic/Feature';
import Support from 'containers/AgencyClassic/Support';
import Story from 'containers/AgencyClassic/Story';
import CaseStudy from 'containers/AgencyClassic/CaseStudies';
import TestimonialSection from 'containers/AgencyClassic/Testimonial';
import TeamSection from 'containers/AgencyClassic/Team';
import MarketingSection from 'containers/AgencyClassic/Marketing';
import FAQSection from 'containers/AgencyClassic/FAQ';
import Footer from 'containers/AgencyClassic/Footer';

import Seo from 'components/seo';
import {
  GlobalStyle,
  ContentWrapper
} from 'containers/AgencyClassic/agencyClassic.styles.js';

const AgencyDigital = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Seo title="Agency Digital" />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <Clients />
          <FeatureSection />
          <Support />
          <Story />
          <CaseStudy />
          <TestimonialSection />
          <TeamSection />
          <MarketingSection />
          <FAQSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default AgencyDigital;
