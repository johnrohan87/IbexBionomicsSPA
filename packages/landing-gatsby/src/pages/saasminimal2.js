import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import { ResetCSS } from 'common/assets/css/style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { theme } from 'common/theme/saasMinimal2';
import Seo from 'components/seo';
import AdvancedAnalytics from 'containers/SaasMinimal2/AdvancedAnalytics';
import Banner from 'containers/SaasMinimal2/Banner';
import Clients from 'containers/SaasMinimal2/Clients';
import Dashboard from 'containers/SaasMinimal2/Dashboard';
import Features from 'containers/SaasMinimal2/Features';
import Footer from 'containers/SaasMinimal2/Footer';
import Navbar from 'containers/SaasMinimal2/Navbar';
import Pricing from 'containers/SaasMinimal2/Pricing';
import {
  ContentWrapper, GlobalStyle
} from 'containers/SaasMinimal2/saasMinimal2.style';
import Statistics from 'containers/SaasMinimal2/Statistics';
import Subscription from 'containers/SaasMinimal2/Subscription';
import Testimonial from 'containers/SaasMinimal2/Testimonial';
import TrackAudience from 'containers/SaasMinimal2/TrackAudience';
import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';


const SaasMinimal2 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Seo title="SaaS Minimal 2 | A react Gatsby landing page" />
        <Modal />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="is-sticky">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <Features />
          <TrackAudience />
          <Pricing />
          <Clients />
          <Statistics />
          <AdvancedAnalytics />
          <Dashboard />
          <Testimonial />
          <Subscription />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasMinimal2;
