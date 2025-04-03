import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import 'animate.css';
import { ResetCSS } from 'common/assets/css/style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { theme } from 'common/theme/saasAppCreative';
import Seo from 'components/seo';
import AnalyticsTool from 'containers/SaasAppCreative/AnalyticsTool';
import Banner from 'containers/SaasAppCreative/Banner';
import CallToAction from 'containers/SaasAppCreative/CallToAction';
import Clients from 'containers/SaasAppCreative/Clients';
import Features from 'containers/SaasAppCreative/Features';
import Footer from 'containers/SaasAppCreative/Footer';
import HowItWorks from 'containers/SaasAppCreative/HowItWorks';
import Navbar from 'containers/SaasAppCreative/Navbar';
import NewsFeed from 'containers/SaasAppCreative/NewsFeed';
import Portfolio from 'containers/SaasAppCreative/Portfolio';
import {
  ContentWrapper, GlobalStyle
} from 'containers/SaasAppCreative/saasAppCreative.style';
import SystemMonitoring from 'containers/SaasAppCreative/SystemMonitoring';
import WorldMap from 'containers/SaasAppCreative/WorldMap';
import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';

const SaasAppCreative = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Seo title="Saas App Creative | A react next landing page" />
        <Modal />
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
          <Portfolio />
          <Features />
          <SystemMonitoring />
          <WorldMap />
          <NewsFeed />
          <CallToAction />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasAppCreative;
