import React from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import Seo from 'components/seo';
import { theme } from 'common/theme/saasCreative';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { ResetCSS } from 'common/assets/css/style';

import BannerSection from 'containers/SaasCreative/Banner';
import Navbar from 'containers/SaasCreative/Navbar';
import Clients from 'containers/SaasCreative/Clients';
import HowItWorks from 'containers/SaasCreative/HowItWorks';
import AdvancedAnalytics from 'containers/SaasCreative/AdvancedAnalytics';
import Features from 'containers/SaasCreative/Features';
import WalletExperience from 'containers/SaasCreative/WalletExperience';
import Testimonial from 'containers/SaasCreative/Testimonial';
import Pricing from 'containers/SaasCreative/Pricing';
import OurCommunity from 'containers/SaasCreative/OurCommunity';
import Faq from 'containers/SaasCreative/Faq';
import CallToAction from 'containers/SaasCreative/CallToAction';
import Footer from 'containers/SaasCreative/Footer';
import {
  GlobalStyle,
  ContentWrapper,
} from 'containers/SaasCreative/saasCreative.style';
import 'common/assets/css/react-slick.css';
import 'rc-collapse/assets/index.css';

const SaasCreative = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Seo title="Gatsby - SaaS Creative | A react Gatsby landing page" />
        {/* end of head */}

        <ResetCSS />
        <GlobalStyle />
        {/* end of global and reset style */}

        {/* start app minimal landing */}
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <Clients />
          <HowItWorks />
          <AdvancedAnalytics />
          <Features />
          <WalletExperience />
          <Testimonial />
          <Pricing />
          <OurCommunity />
          <Faq />
          <CallToAction />
          <Footer />
        </ContentWrapper>
        {/* end of app minimal landing */}
      </>
    </ThemeProvider>
  );
};
export default SaasCreative;
