import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { theme } from 'common/theme/webAppCreative';
import { ResetCSS } from 'common/assets/css/style';
import Navbar from 'containers/WebAppCreative/Navbar';
import Banner from 'containers/WebAppCreative/Banner';
import Clients from 'containers/WebAppCreative/Clients';
import HowItWorks from 'containers/WebAppCreative/HowItWorks';
import AnalyticsTool from 'containers/WebAppCreative/AnalyticsTool';
import Dashboard from 'containers/WebAppCreative/Dashboard';
import Testimonials from 'containers/WebAppCreative/Testimonials';
import Integrations from 'containers/WebAppCreative/Integrations';
import Pricing from 'containers/WebAppCreative/Pricing';
import NewsFeed from 'containers/WebAppCreative/NewsFeed';
import Faq from 'containers/WebAppCreative/Faq';
import CallToAction from 'containers/WebAppCreative/CallToAction';
import Footer from 'containers/WebAppCreative/Footer';
import Seo from 'components/seo';
import {
  GlobalStyle,
  ContentWrapper,
  CombinedSection,
  CornerPattern,
} from 'containers/WebAppCreative/webAppCreative.style';

const WebAppCreative = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Seo title="Web App Creative | A react next landing page" />

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
          <HowItWorks />
          <AnalyticsTool />
          <Dashboard />
          <Testimonials />
          <CombinedSection>
            <Integrations />
            <Pricing />
            <CornerPattern />
          </CombinedSection>
          <NewsFeed />
          <Faq />
          <CallToAction />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default WebAppCreative;
