import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import 'animate.css';
import { ResetCSS } from 'common/assets/css/style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { theme } from 'common/theme/saasAppDark';
import Seo from 'components/seo';
import AppDownload from 'containers/SaasAppDark/AppDownload';
import Banner from 'containers/SaasAppDark/Banner';
import CallToAction from 'containers/SaasAppDark/CallToAction';
import Clients from 'containers/SaasAppDark/Clients';
import Footer from 'containers/SaasAppDark/Footer';
import Monitoring from 'containers/SaasAppDark/Monitoring';
import Navbar from 'containers/SaasAppDark/Navbar';
import NewsFeed from 'containers/SaasAppDark/NewsFeed';
import {
  ContentWrapper, GlobalStyle
} from 'containers/SaasAppDark/saasAppDark.style';
import Services from 'containers/SaasAppDark/Services';
import StatsCounter from 'containers/SaasAppDark/StatsCounter';
import Testimonials from 'containers/SaasAppDark/Testimonials';
import VideoIntro from 'containers/SaasAppDark/VideoIntro';
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
          <Services />
          <Monitoring />
          <StatsCounter />
          <VideoIntro />
          <Testimonials />
          <CallToAction />
          <NewsFeed />
          <AppDownload />
          <Footer />
          {/* <Clients />
          <HowItWorks />
          <AnalyticsTool />
          <Portfolio />
          <Features />
          <SystemMonitoring />
          <WorldMap />
          <NewsFeed />
          <CallToAction />
          <Footer /> */}
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasAppCreative;
