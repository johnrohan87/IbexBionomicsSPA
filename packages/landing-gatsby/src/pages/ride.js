import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import { ResetCSS } from 'common/assets/css/style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { rideTheme } from 'common/theme/ride';
import Seo from 'components/seo';
import Banner from 'containers/Ride/Banner';
import FeatureSection from 'containers/Ride/Feature';
import FeatureSlider from 'containers/Ride/FeatureSlider';
import Footer from 'containers/Ride/Footer';
import HowItWorkSection from 'containers/Ride/HowItWorks';
import LatestNewsSection from 'containers/Ride/LatestNews';
import LocationSection from 'containers/Ride/LocationSelection';
import Navbar from 'containers/Ride/Navbar';
import { ContentWrapper, GlobalStyle } from 'containers/Ride/ride.style';
import RideOption from 'containers/Ride/RideOption';
import TestimonialSection from 'containers/Ride/TestimonialSection';
import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';

const Ride = () => {
  return (
    <ThemeProvider theme={rideTheme}>
      <Fragment>
        <Seo title="Ride | A react next landing page" />
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
          <RideOption />
          <LocationSection />
          <FeatureSlider />
          <FeatureSection />
          <LatestNewsSection />
          <HowItWorkSection />
          <TestimonialSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Ride;
